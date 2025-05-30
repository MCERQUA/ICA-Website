const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Configuration for different image sizes based on usage
const IMAGE_CONFIGS = {
  // Hero/Banner images (like Arizona sunset)
  'arizona_sunset': {
    sizes: [
      { width: 1920, suffix: '-1920w' },
      { width: 1440, suffix: '-1440w' },
      { width: 1024, suffix: '-1024w' },
      { width: 768, suffix: '-768w' },
      { width: 640, suffix: '-640w' }
    ],
    quality: 85
  },
  
  // Service category images
  'service': {
    sizes: [
      { width: 800, suffix: '-800w' },
      { width: 600, suffix: '-600w' },
      { width: 400, suffix: '-400w' },
      { width: 300, suffix: '-300w' }
    ],
    quality: 85
  },
  
  // Logo/Badge images
  'logo': {
    sizes: [
      { width: 400, suffix: '-400w' },
      { width: 200, suffix: '-200w' },
      { width: 150, suffix: '-150w' },
      { width: 100, suffix: '-100w' }
    ],
    quality: 90
  },
  
  // General content images
  'default': {
    sizes: [
      { width: 1200, suffix: '-1200w' },
      { width: 800, suffix: '-800w' },
      { width: 600, suffix: '-600w' },
      { width: 400, suffix: '-400w' }
    ],
    quality: 85
  }
};

// Map specific images to their configurations
const IMAGE_TYPE_MAP = {
  'insulation_contractors_of_arizona_spray_foam_Arizona_Sunset.webp': 'arizona_sunset',
  'vent-cleaning_arizona.webp': 'arizona_sunset',
  
  // Service images
  'Agricultural_spray_foam_insulation_arizona.webp': 'service',
  'Commercial_Spray_foam_insulation_arizona.webp': 'service',
  'industrial_spray_foam_insulation_arizona.webp': 'service',
  'residential_spray_foam_insulation_arizona.webp': 'service',
  'Spray-Foam-Insulation-Services.webp': 'service',
  'spray-foam-industrial-tanks-farming.webp': 'service',
  'spray-foam-tanks.webp': 'service',
  
  // Logo/Badge images
  'BBB.webp': 'logo',
  'SPFA.webp': 'logo',
  'SPRAYFOAM_INSURANCE.webp': 'logo',
  'Spray_Foam_Insurance_logo.webp': 'logo',
  'rocseal.webp': 'logo',
  'Insulation_Contractors_of_arizona_logo.webp': 'logo',
  'icaa-Logo.webp': 'logo',
  '2025_sfww_ambassador_badge.webp': 'logo',
  'insulation_contractors_of_az_qr.webp': 'logo'
};

async function ensureDir(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function optimizeImage(inputPath, outputDir, filename, config) {
  const ext = path.extname(filename);
  const basename = path.basename(filename, ext);
  
  console.log(`\n📸 Processing: ${filename}`);
  
  // Get original image metadata
  const metadata = await sharp(inputPath).metadata();
  console.log(`  Original: ${metadata.width}x${metadata.height} (${metadata.format})`);
  
  // Process each size
  for (const sizeConfig of config.sizes) {
    // Skip if the original is smaller than the target size
    if (metadata.width < sizeConfig.width) {
      console.log(`  ⏭️  Skipping ${sizeConfig.width}w (larger than original)`);
      continue;
    }
    
    const outputFilename = `${basename}${sizeConfig.suffix}.webp`;
    const outputPath = path.join(outputDir, outputFilename);
    
    try {
      await sharp(inputPath)
        .resize(sizeConfig.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ 
          quality: config.quality,
          effort: 6 // Higher effort for better compression
        })
        .toFile(outputPath);
      
      // Get output file size
      const stats = await fs.stat(outputPath);
      const reduction = Math.round((1 - stats.size / metadata.size) * 100);
      
      console.log(`  ✅ Created: ${outputFilename} (${Math.round(stats.size / 1024)}KB, -${reduction}%)`);
    } catch (err) {
      console.error(`  ❌ Error creating ${outputFilename}:`, err.message);
    }
  }
  
  // Also create an optimized version at original size
  const originalOptimizedFilename = `${basename}-original.webp`;
  const originalOptimizedPath = path.join(outputDir, originalOptimizedFilename);
  
  try {
    await sharp(inputPath)
      .webp({ 
        quality: config.quality + 5, // Slightly higher quality for original size
        effort: 6
      })
      .toFile(originalOptimizedPath);
    
    const stats = await fs.stat(originalOptimizedPath);
    const reduction = Math.round((1 - stats.size / metadata.size) * 100);
    
    console.log(`  ✅ Original optimized: ${originalOptimizedFilename} (${Math.round(stats.size / 1024)}KB, -${reduction}%)`);
  } catch (err) {
    console.error(`  ❌ Error creating original optimized:`, err.message);
  }
}

async function main() {
  const sourceDir = './src/images';
  const outputDir = './src/images-optimized';
  
  console.log('🚀 ICA Image Optimization Script');
  console.log('================================\n');
  
  // Create output directory
  await ensureDir(outputDir);
  console.log(`✅ Output directory ready: ${outputDir}`);
  
  // Get all image files
  const files = await fs.readdir(sourceDir);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|webp)$/i.test(file) && file !== 'Readme.md'
  );
  
  console.log(`\n📁 Found ${imageFiles.length} images to optimize`);
  console.log('Starting optimization...\n');
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  // Process each image
  for (const file of imageFiles) {
    const inputPath = path.join(sourceDir, file);
    
    // Get file stats
    const stats = await fs.stat(inputPath);
    totalOriginalSize += stats.size;
    
    // Determine config type
    const configType = IMAGE_TYPE_MAP[file] || 'default';
    const config = IMAGE_CONFIGS[configType];
    
    console.log(`Using '${configType}' configuration`);
    
    // Optimize the image
    await optimizeImage(inputPath, outputDir, file, config);
  }
  
  // Calculate total size of optimized images
  const optimizedFiles = await fs.readdir(outputDir);
  for (const file of optimizedFiles) {
    const stats = await fs.stat(path.join(outputDir, file));
    totalOptimizedSize += stats.size;
  }
  
  // Summary
  console.log('\n✨ Optimization Complete!');
  console.log('========================');
  console.log(`Original total size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Optimized total size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total reduction: ${Math.round((1 - totalOptimizedSize / totalOriginalSize) * 100)}%`);
  console.log(`\n📁 Optimized images saved to: ${outputDir}`);
  console.log('\n⚡ Next steps:');
  console.log('1. Update your components to use srcset with the optimized images');
  console.log('2. Add the images-optimized directory to your .eleventy.js config');
  console.log('3. Test the responsive images on different devices');
}

// Run the script
main().catch(err => {
  console.error('❌ Script failed:', err);
  process.exit(1);
});