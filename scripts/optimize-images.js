#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script helps compress large images to improve website performance.
 * 
 * To use this script:
 * 1. Install sharp: npm install sharp --save-dev
 * 2. Run: node scripts/optimize-images.js
 * 
 * This will create optimized versions of images in the public/images directory.
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.log('❌ Sharp not installed. Run: npm install sharp --save-dev');
  process.exit(1);
}

const INPUT_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images-optimized');

// Target sizes for different image types
const SIZES = {
  menu: { width: 800, height: 600, quality: 85 },
  gallery: { width: 1200, height: 800, quality: 80 },
  pages: { width: 1000, height: 700, quality: 85 },
  branding: { width: 400, height: 400, quality: 90 }
};

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const categories = ['menu', 'gallery', 'pages', 'branding'];
  
  for (const category of categories) {
    const inputPath = path.join(INPUT_DIR, category);
    const outputPath = path.join(OUTPUT_DIR, category);
    
    if (!fs.existsSync(inputPath)) continue;
    
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }
    
    const files = fs.readdirSync(inputPath).filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );
    
    console.log(`📁 Processing ${category} (${files.length} files)...`);
    
    for (const file of files) {
      const inputFile = path.join(inputPath, file);
      const outputFile = path.join(outputPath, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      
      try {
        const { width, height, quality } = SIZES[category];
        
        await sharp(inputFile)
          .resize(width, height, { 
            fit: 'cover', 
            position: 'center' 
          })
          .webp({ quality })
          .toFile(outputFile);
          
        const originalSize = fs.statSync(inputFile).size;
        const optimizedSize = fs.statSync(outputFile).size;
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`  ✅ ${file} → ${path.basename(outputFile)} (${savings}% smaller)`);
      } catch (error) {
        console.log(`  ❌ Failed to optimize ${file}:`, error.message);
      }
    }
  }
  
  console.log('\n🎉 Image optimization complete!');
  console.log(`📂 Optimized images saved to: ${OUTPUT_DIR}`);
  console.log('\n💡 Next steps:');
  console.log('1. Review the optimized images');
  console.log('2. Replace original images with optimized versions');
  console.log('3. Update image paths to use .webp format where supported');
}

optimizeImages().catch(console.error);