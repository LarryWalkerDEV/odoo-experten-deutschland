#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// Class mappings from desktop-first to mobile-first
const classMappings = {
  // Typography
  'text-6xl': 'mobile-headline',
  'text-5xl': 'mobile-headline', 
  'text-4xl md:text-5xl lg:text-6xl': 'mobile-headline',
  'text-3xl md:text-4xl': 'mobile-subtitle',
  'text-2xl md:text-3xl': 'mobile-subtitle',
  'text-xl': 'mobile-text text-lg',
  'text-lg': 'mobile-text',
  'text-base': 'mobile-text text-sm',
  
  // Spacing & Layout
  'px-4 sm:px-6 lg:px-8': 'mobile-container',
  'px-6': 'px-4 sm:px-6',
  'py-24': 'py-12 sm:py-16 md:py-24',
  'py-16': 'py-8 sm:py-12 md:py-16',
  'py-12': 'py-6 sm:py-8 md:py-12',
  'py-8': 'py-4 sm:py-6 md:py-8',
  'mb-8': 'mb-4 sm:mb-6 md:mb-8',
  'mb-6': 'mb-3 sm:mb-4 md:mb-6',
  'mb-4': 'mb-2 sm:mb-3 md:mb-4',
  'gap-12': 'gap-4 sm:gap-6 md:gap-8 lg:gap-12',
  'gap-8': 'gap-4 sm:gap-6 md:gap-8',
  'gap-6': 'gap-3 sm:gap-4 md:gap-6',
  'gap-4': 'gap-2 sm:gap-3 md:gap-4',
  'space-y-8': 'space-mobile',
  'space-y-6': 'space-mobile',
  
  // Grid & Flex
  'grid-cols-3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  'grid-cols-2': 'responsive-grid',
  
  // Heights
  'min-h-[90vh]': 'hero-section',
  'h-96': 'visual-container',
  'h-80': 'visual-container',
  'h-64': 'visual-container',
  
  // Buttons
  'px-8 py-4': 'touch-target px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4',
  'px-6 py-3': 'touch-target px-4 sm:px-6 py-2 sm:py-3',
  
  // Cards
  'rounded-2xl p-6': 'mobile-card rounded-lg sm:rounded-xl md:rounded-2xl',
  'rounded-xl p-6': 'mobile-card rounded-lg sm:rounded-xl',
  'rounded-lg p-4': 'mobile-card',
  
  // Widths
  'max-w-7xl': 'max-w-full md:max-w-7xl',
  'max-w-6xl': 'max-w-full md:max-w-6xl',
  'max-w-4xl': 'max-w-full md:max-w-4xl',
  'w-96': 'w-full sm:w-80 md:w-96',
  'w-80': 'w-full sm:w-72 md:w-80',
  'w-64': 'w-full sm:w-56 md:w-64',
  
  // Icons
  'w-12 h-12': 'w-10 h-10 sm:w-12 sm:h-12',
  'w-10 h-10': 'w-8 h-8 sm:w-10 sm:h-10',
  'w-8 h-8': 'w-6 h-6 sm:w-8 sm:h-8',
  'w-6 h-6': 'w-5 h-5 sm:w-6 sm:h-6'
};

// Additional mobile optimizations
const additionalOptimizations = {
  // Add touch targets to interactive elements
  '<button': '<button className="touch-target"',
  '<a href': '<a className="touch-target" href',
  
  // Optimize images
  '<img': '<img loading="lazy"',
  
  // Add mobile viewport units
  'h-screen': 'min-h-svh',
  'min-h-screen': 'min-h-svh',
  'h-full': 'h-full min-h-svh',
  
  // Optimize animations for mobile
  'duration-200': 'duration-200 sm:duration-300',
  'duration-300': 'duration-200 sm:duration-300',
  'hover:scale-105': 'active:scale-95 sm:hover:scale-105',
  'hover:scale-110': 'active:scale-95 sm:hover:scale-110'
};

async function updateFile(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf8');
    let modified = false;
    
    // Apply class mappings
    for (const [oldClass, newClass] of Object.entries(classMappings)) {
      const regex = new RegExp(`className="([^"]*\\b${oldClass}\\b[^"]*)"`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, (match, classString) => {
          const updated = classString.replace(new RegExp(`\\b${oldClass}\\b`, 'g'), newClass);
          modified = true;
          return `className="${updated}"`;
        });
      }
    }
    
    // Apply additional optimizations
    for (const [pattern, replacement] of Object.entries(additionalOptimizations)) {
      if (content.includes(pattern)) {
        content = content.replace(new RegExp(pattern, 'g'), replacement);
        modified = true;
      }
    }
    
    // Add mobile-specific optimizations
    // Ensure all containers have overflow-hidden
    content = content.replace(/className="([^"]*\bcontainer\b[^"]*)"(?![^>]*overflow-hidden)/g, 
      'className="$1 overflow-hidden"');
    
    // Add will-change to animated elements
    content = content.replace(/animate={{/g, 'animate={{ className="gpu-accelerate"');
    
    if (modified) {
      await fs.writeFile(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

async function findFiles(dir, pattern) {
  const files = [];
  const items = await fs.readdir(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
      files.push(...await findFiles(fullPath, pattern));
    } else if (item.isFile() && pattern.test(item.name)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function main() {
  console.log('🚀 Starting mobile-first class updates...\n');
  
  const srcDir = path.join(__dirname, '..', 'src');
  const files = await findFiles(srcDir, /\.(tsx|jsx)$/);
  
  console.log(`Found ${files.length} component files\n`);
  
  let updatedCount = 0;
  
  for (const file of files) {
    const updated = await updateFile(file);
    if (updated) updatedCount++;
  }
  
  console.log(`\n✨ Complete! Updated ${updatedCount} files.`);
}

main().catch(console.error);