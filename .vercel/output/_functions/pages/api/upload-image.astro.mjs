import { v2 } from 'cloudinary';
import { f as verifySession } from '../../chunks/db_BB5DAx5-.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const MAX_SIZE_BYTES = 5 * 1024 * 1024;
v2.config({
  cloud_name: "your_cloud_name",
  api_key: "your_api_key",
  api_secret: "your_api_secret",
  secure: true
});
function checkAuth(cookies) {
  const token = cookies.get("admin_session")?.value;
  return verifySession(token);
}
async function POST({ request, cookies, url }) {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const formData = await request.formData();
    const file = formData.get("image");
    if (!file || typeof file === "string") {
      return new Response(JSON.stringify({ error: "No image file provided." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return new Response(
        JSON.stringify({ error: "Invalid file type. Only JPG, PNG and WEBP are accepted." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (file.size > MAX_SIZE_BYTES) {
      return new Response(
        JSON.stringify({ error: "File is too large. Maximum size is 5 MB." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const folderParam = url.searchParams.get("folder") || "general";
    const uploadFolder = `margdarshak/${folderParam}`;
    const result = await new Promise((resolve, reject) => {
      const uploadStream = v2.uploader.upload_stream(
        {
          folder: uploadFolder,
          resource_type: "image",
          // Auto-format and quality for optimization
          transformation: [
            { fetch_format: "auto", quality: "auto" }
          ]
        },
        (error, result2) => {
          if (error) return reject(error);
          resolve(result2);
        }
      );
      uploadStream.end(buffer);
    });
    return new Response(
      JSON.stringify({
        success: true,
        url: result.secure_url,
        publicId: result.public_id
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Upload failed. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
async function DELETE({ request, cookies, url }) {
  if (!checkAuth(cookies)) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  const publicId = url.searchParams.get("publicId");
  if (!publicId) {
    return new Response(JSON.stringify({ error: "publicId is required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    await v2.uploader.destroy(publicId);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Cloudinary delete error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
