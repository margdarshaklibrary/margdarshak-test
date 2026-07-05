import { v2 as cloudinary } from 'cloudinary';
import { verifySession } from '../../data/db.js';

export const prerender = false;

const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

// Configure Cloudinary from env
cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
  secure: true,
});

function checkAuth(cookies) {
  const token = cookies.get('admin_session')?.value;
  return verifySession(token);
}

/**
 * POST /api/upload-image?folder=courses|internships
 * Accepts multipart/form-data with a single `image` file field.
 * Returns { success: true, url, publicId }
 */
export async function POST({ request, cookies, url }) {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Check Cloudinary config is present
  if (!import.meta.env.CLOUDINARY_CLOUD_NAME) {
    return new Response(
      JSON.stringify({ error: 'Cloudinary is not configured. Add CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET to your .env file.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get('image');

    if (!file || typeof file === 'string') {
      return new Response(JSON.stringify({ error: 'No image file provided.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate MIME type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return new Response(
        JSON.stringify({ error: 'Invalid file type. Only JPG, PNG and WEBP are accepted.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate file size
    if (file.size > MAX_SIZE_BYTES) {
      return new Response(
        JSON.stringify({ error: 'File is too large. Maximum size is 5 MB.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Read file as ArrayBuffer → Buffer for Cloudinary upload_stream
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Determine Cloudinary upload folder
    const folderParam = url.searchParams.get('folder') || 'general';
    const uploadFolder = `margdarshak/${folderParam}`;

    // Upload to Cloudinary via upload_stream wrapped in a Promise
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: uploadFolder,
          resource_type: 'image',
          // Auto-format and quality for optimization
          transformation: [
            { fetch_format: 'auto', quality: 'auto' }
          ],
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    return new Response(
      JSON.stringify({
        success: true,
        url: result.secure_url,
        publicId: result.public_id,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Cloudinary upload error:', err);
    return new Response(
      JSON.stringify({ error: err.message || 'Upload failed. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

/**
 * DELETE /api/upload-image?publicId=...
 * Deletes a Cloudinary asset by publicId. Called when replacing an existing image.
 */
export async function DELETE({ request, cookies, url }) {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const publicId = url.searchParams.get('publicId');
  if (!publicId) {
    return new Response(JSON.stringify({ error: 'publicId is required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    await cloudinary.uploader.destroy(publicId);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Cloudinary delete error:', err);
    // Non-fatal: log but don't fail the whole save operation
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
