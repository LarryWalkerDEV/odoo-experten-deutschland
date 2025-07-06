const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Skip Next.js build for now and just create static files
console.log('Creating static export...');

// Create out directory
const outDir = path.join(__dirname, 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Copy static files from public directory if it exists and has files
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir);
  if (publicFiles.length > 0) {
    console.log('Copying public files...');
    publicFiles.forEach(file => {
      const srcPath = path.join(publicDir, file);
      const destPath = path.join(outDir, file);
      if (fs.statSync(srcPath).isDirectory()) {
        execSync(`cp -r "${srcPath}" "${destPath}"`, { stdio: 'inherit' });
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  }
}

// Create a simple index.html as a placeholder
const indexHtml = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Odoo Experten Deutschland</title>
  <meta name="description" content="Unabhängiges Wissensportal für Odoo ERP. Fundierte Informationen, neutrale Analysen und aktuelle Artikel zu Odoo, Hosting und Implementierung.">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      margin: 0;
      padding: 0;
      background: #f5f5f5;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    header {
      background: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 1rem 0;
      margin-bottom: 2rem;
    }
    h1 {
      color: #333;
      margin: 0;
    }
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 2rem;
      border-radius: 8px;
      text-align: center;
      margin-bottom: 3rem;
    }
    .hero h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .hero p {
      font-size: 1.25rem;
      opacity: 0.9;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    .feature {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .feature h3 {
      color: #667eea;
      margin-bottom: 1rem;
    }
    .cta {
      text-align: center;
      padding: 3rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .button {
      display: inline-block;
      background: #667eea;
      color: white;
      padding: 1rem 2rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.2s;
    }
    .button:hover {
      background: #5a67d8;
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <h1>Odoo Experten Deutschland</h1>
    </div>
  </header>
  
  <div class="container">
    <div class="hero">
      <h2>Ihr unabhängiges Wissensportal für Odoo ERP</h2>
      <p>Fundierte Informationen, neutrale Analysen und aktuelle Artikel</p>
    </div>
    
    <div class="features">
      <div class="feature">
        <h3>Odoo Grundlagen</h3>
        <p>Umfassende Anleitungen zu allen Odoo-Modulen und Funktionen für den deutschen Markt</p>
      </div>
      <div class="feature">
        <h3>Odoo 19 Features</h3>
        <p>Entdecken Sie die neuesten Funktionen und KI-Integrationen in Odoo 19</p>
      </div>
      <div class="feature">
        <h3>Hosting-Lösungen</h3>
        <p>Finden Sie die perfekte Hosting-Lösung für Ihre Odoo-Installation</p>
      </div>
    </div>
    
    <div class="cta">
      <h2>Willkommen bei Odoo Experten Deutschland</h2>
      <p>Unsere Website wird gerade für Sie vorbereitet.</p>
      <p>In Kürze finden Sie hier umfassende Informationen zu Odoo ERP.</p>
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), indexHtml);
console.log('Static export complete!');