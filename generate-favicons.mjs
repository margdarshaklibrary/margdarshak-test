/**
 * Favicon PNG Generator
 * Generates PNG favicon assets from the SVG favicon at various sizes.
 * Uses sharp for high-quality SVG-to-PNG conversion.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, 'public');

// Sizes to generate
const sizes = [16, 32, 48, 180, 192, 512];

async function generateFavicons() {
  // Dynamic import of sharp
  const sharp = (await import('sharp')).default;
  
  const svgPath = join(publicDir, 'favicon.svg');
  const svgBuffer = readFileSync(svgPath);

  console.log('Generating PNG favicons from SVG...');

  for (const size of sizes) {
    const outputName = size === 180 
      ? 'apple-touch-icon.png' 
      : `favicon-${size}x${size}.png`;
    const outputPath = join(publicDir, outputName);

    await sharp(svgBuffer, { density: Math.max(300, size * 2) })
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(outputPath);

    console.log(`  ✓ ${outputName} (${size}×${size})`);
  }

  // Generate favicon.ico containing 16, 32, 48 sizes
  // favicon.ico is just the 32×32 PNG wrapped — browsers accept PNG-in-ICO
  const ico32Path = join(publicDir, 'favicon-32x32.png');
  const ico32Buffer = readFileSync(ico32Path);
  
  // Create a simple ICO file with 32x32 PNG
  const icoBuffer = createIco([
    { size: 16, buffer: readFileSync(join(publicDir, 'favicon-16x16.png')) },
    { size: 32, buffer: ico32Buffer },
    { size: 48, buffer: readFileSync(join(publicDir, 'favicon-48x48.png')) },
  ]);
  writeFileSync(join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('  ✓ favicon.ico (16, 32, 48)');

  console.log('\nAll favicon assets generated successfully!');
}

/**
 * Creates an ICO file from PNG buffers.
 * ICO format: header + directory entries + image data (PNG payloads)
 */
function createIco(images) {
  const headerSize = 6;
  const dirEntrySize = 16;
  const numImages = images.length;
  
  // Calculate total size
  let dataOffset = headerSize + (dirEntrySize * numImages);
  const entries = images.map(img => {
    const entry = {
      size: img.size,
      buffer: img.buffer,
      offset: dataOffset,
    };
    dataOffset += img.buffer.length;
    return entry;
  });

  const totalSize = dataOffset;
  const ico = Buffer.alloc(totalSize);

  // ICO Header
  ico.writeUInt16LE(0, 0);      // Reserved
  ico.writeUInt16LE(1, 2);      // Type: 1 = ICO
  ico.writeUInt16LE(numImages, 4); // Number of images

  // Directory entries
  entries.forEach((entry, i) => {
    const offset = headerSize + (i * dirEntrySize);
    ico.writeUInt8(entry.size < 256 ? entry.size : 0, offset);      // Width
    ico.writeUInt8(entry.size < 256 ? entry.size : 0, offset + 1);  // Height
    ico.writeUInt8(0, offset + 2);                                    // Color palette
    ico.writeUInt8(0, offset + 3);                                    // Reserved
    ico.writeUInt16LE(1, offset + 4);                                 // Color planes
    ico.writeUInt16LE(32, offset + 6);                                // Bits per pixel
    ico.writeUInt32LE(entry.buffer.length, offset + 8);               // Image size
    ico.writeUInt32LE(entry.offset, offset + 12);                     // Offset
  });

  // Image data
  entries.forEach(entry => {
    entry.buffer.copy(ico, entry.offset);
  });

  return ico;
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
