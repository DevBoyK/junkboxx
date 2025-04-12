const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create products directory if it doesn't exist
const productsDir = path.join(__dirname, '../public/products');
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

// Function to generate a placeholder image
function generatePlaceholder(width, height, text, filename) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#1a1a1a');
  gradient.addColorStop(1, '#2a2a2a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.font = 'bold 48px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(path.join(productsDir, filename), buffer);
}

// Generate placeholder images
const placeholders = [
  { width: 800, height: 1000, text: 'HOODIE', filename: 'hoodie.jpg' },
  { width: 800, height: 1000, text: 'T-SHIRT', filename: 'tee.jpg' },
  { width: 800, height: 800, text: 'CAP', filename: 'cap.jpg' },
  { width: 400, height: 400, text: 'TRACK', filename: 'placeholder-track.jpg' },
];

placeholders.forEach(({ width, height, text, filename }) => {
  generatePlaceholder(width, height, text, filename);
  console.log(`Generated ${filename}`);
});

console.log('Placeholder images generated successfully!'); 