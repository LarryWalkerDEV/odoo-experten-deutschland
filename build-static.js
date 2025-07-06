const fs = require('fs');
const path = require('path');

// Ensure out directory exists
const outDir = path.join(__dirname, 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Create CSS file
const cssContent = `
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f5f5f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
header {
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #6b46c1;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #6b46c1;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 0 80px;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease-out;
}

.hero p {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 2rem;
  animation: fadeInUp 1s ease-out 0.2s both;
}

.cta-button {
  display: inline-block;
  background: white;
  color: #6b46c1;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;
  animation: fadeInUp 1s ease-out 0.4s both;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* Features Section */
.features {
  padding: 80px 0;
  background: white;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
}

.feature-card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #666;
  line-height: 1.8;
}

/* Content Categories */
.categories {
  padding: 80px 0;
  background: #f8f9fa;
}

.categories h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: inherit;
  display: block;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.category-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  color: white;
}

.category-header h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.category-content {
  padding: 2rem;
}

.category-content p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.learn-more {
  color: #6b46c1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

/* Footer */
footer {
  background: #2d3748;
  color: white;
  padding: 40px 0;
  text-align: center;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
}

.footer-section a {
  color: #cbd5e0;
  text-decoration: none;
  display: block;
  padding: 0.25rem 0;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: white;
}

.footer-bottom {
  border-top: 1px solid #4a5568;
  padding-top: 2rem;
  color: #cbd5e0;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .feature-grid,
  .category-grid {
    grid-template-columns: 1fr;
  }
}
`;

fs.writeFileSync(path.join(outDir, 'styles.css'), cssContent);

// Create main index.html
const indexHTML = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Odoo Experten Deutschland - Ihr unabhängiges Wissensportal</title>
  <meta name="description" content="Unabhängiges Wissensportal für Odoo ERP. Fundierte Informationen, neutrale Analysen und aktuelle Artikel zu Odoo, Hosting und Implementierung.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav class="container">
      <div class="logo">Odoo Experten Deutschland</div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/odoo.html">Odoo</a></li>
        <li><a href="/odoo-19.html">Odoo 19</a></li>
        <li><a href="/odoo-hosting.html">Hosting</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero">
    <div class="container">
      <h1>Ihr unabhängiges Wissensportal für Odoo ERP</h1>
      <p>Fundierte Informationen, neutrale Analysen und aktuelle Artikel zu allen Aspekten von Odoo</p>
      <a href="/odoo.html" class="cta-button">Jetzt entdecken →</a>
    </div>
  </section>

  <section class="features">
    <div class="container">
      <h2>Warum ist Odoo interessant?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>All-in-One Lösung</h3>
          <p>Integrieren Sie alle Geschäftsprozesse in einem System - von CRM über Buchhaltung bis zur Produktion</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛡️</div>
          <h3>Deutsche Standards</h3>
          <p>Vollständig konform mit deutschen Vorschriften, DSGVO-konform und GoBD-zertifiziert</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📈</div>
          <h3>Skalierbar & Flexibel</h3>
          <p>Wächst mit Ihrem Unternehmen mit - modularer Aufbau und flexible Anpassungsmöglichkeiten</p>
        </div>
      </div>
    </div>
  </section>

  <section class="categories">
    <div class="container">
      <h2>Ihre Wissensquelle für Odoo</h2>
      <div class="category-grid">
        <a href="/odoo.html" class="category-card">
          <div class="category-header">
            <h3>Odoo Grundlagen</h3>
          </div>
          <div class="category-content">
            <p>Umfassende Anleitungen zu allen Odoo-Modulen und Funktionen für den deutschen Markt</p>
            <span class="learn-more">Mehr erfahren →</span>
          </div>
        </a>
        <a href="/odoo-19.html" class="category-card">
          <div class="category-header">
            <h3>Odoo 19 Features</h3>
          </div>
          <div class="category-content">
            <p>Entdecken Sie die neuesten Funktionen und KI-Integrationen in Odoo 19</p>
            <span class="learn-more">Mehr erfahren →</span>
          </div>
        </a>
        <a href="/odoo-hosting.html" class="category-card">
          <div class="category-header">
            <h3>Hosting-Lösungen</h3>
          </div>
          <div class="category-content">
            <p>Finden Sie die perfekte Hosting-Lösung für Ihre Odoo-Installation</p>
            <span class="learn-more">Mehr erfahren →</span>
          </div>
        </a>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Über uns</h4>
          <p>Unabhängiges Expertenwissen zu Odoo ERP für deutsche Unternehmen</p>
        </div>
        <div class="footer-section">
          <h4>Rechtliches</h4>
          <a href="/impressum.html">Impressum</a>
          <a href="/datenschutz.html">Datenschutz</a>
        </div>
        <div class="footer-section">
          <h4>Kontakt</h4>
          <p>info@odoo-experten-deutschland.de</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Odoo Experten Deutschland. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), indexHTML);

// Create Odoo page
const odooHTML = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Odoo ERP Artikel & Anleitungen - Odoo Experten Deutschland</title>
  <meta name="description" content="Umfassende Informationen zu Odoo ERP - Features, Module, Implementierung und Best Practices für deutsche Unternehmen.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav class="container">
      <div class="logo">Odoo Experten Deutschland</div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/odoo.html" class="active">Odoo</a></li>
        <li><a href="/odoo-19.html">Odoo 19</a></li>
        <li><a href="/odoo-hosting.html">Hosting</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero" style="background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);">
    <div class="container">
      <h1>Odoo ERP Wissen & Ressourcen</h1>
      <p>Entdecken Sie umfassende Anleitungen, Best Practices und Expertentipps für die erfolgreiche Implementierung und Nutzung von Odoo ERP</p>
    </div>
  </section>

  <section class="features">
    <div class="container">
      <h2>Odoo Module im Detail</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>CRM & Vertrieb</h3>
          <p>Optimieren Sie Ihre Kundenbeziehungen und steigern Sie Ihren Vertriebserfolg mit Odoo CRM</p>
        </div>
        <div class="feature-card">
          <h3>Buchhaltung & Finanzen</h3>
          <p>Vollständige Finanzverwaltung mit deutscher Lokalisierung und GoBD-Konformität</p>
        </div>
        <div class="feature-card">
          <h3>Lager & Logistik</h3>
          <p>Effiziente Lagerverwaltung und nahtlose Integration in Ihre Lieferkette</p>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-bottom">
        <p>&copy; 2024 Odoo Experten Deutschland. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'odoo.html'), odooHTML);

// Create Odoo 19 page
const odoo19HTML = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Odoo 19 - Neue Features & KI-Integration</title>
  <meta name="description" content="Entdecken Sie die revolutionären Features von Odoo 19: KI-Integration, verbesserte Performance und neue Module für deutsche Unternehmen.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav class="container">
      <div class="logo">Odoo Experten Deutschland</div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/odoo.html">Odoo</a></li>
        <li><a href="/odoo-19.html" class="active">Odoo 19</a></li>
        <li><a href="/odoo-hosting.html">Hosting</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero" style="background: linear-gradient(135deg, #9f7aea 0%, #805ad5 100%);">
    <div class="container">
      <h1>Odoo 19 - Die Zukunft ist hier</h1>
      <p>Entdecken Sie die revolutionären Features von Odoo 19: KI-Integration, verbesserte Performance und innovative Module für den deutschen Markt</p>
    </div>
  </section>

  <section class="features">
    <div class="container">
      <h2>Was ist neu in Odoo 19?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>KI-Powered Features</h3>
          <p>Intelligente Automatisierung mit künstlicher Intelligenz für effizientere Geschäftsprozesse</p>
        </div>
        <div class="feature-card">
          <h3>50% Schneller</h3>
          <p>Deutlich verbesserte Performance und Ladezeiten für eine bessere Benutzererfahrung</p>
        </div>
        <div class="feature-card">
          <h3>Neue Module</h3>
          <p>Erweiterte Funktionen für moderne Geschäftsprozesse und digitale Transformation</p>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-bottom">
        <p>&copy; 2024 Odoo Experten Deutschland. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'odoo-19.html'), odoo19HTML);

// Create Odoo Hosting page
const hostingHTML = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Odoo Hosting - Die besten Lösungen im Vergleich</title>
  <meta name="description" content="Finden Sie die perfekte Odoo Hosting-Lösung: Cloud vs On-Premise, deutsche Anbieter, Sicherheit und Performance im Vergleich.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav class="container">
      <div class="logo">Odoo Experten Deutschland</div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/odoo.html">Odoo</a></li>
        <li><a href="/odoo-19.html">Odoo 19</a></li>
        <li><a href="/odoo-hosting.html" class="active">Hosting</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero" style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);">
    <div class="container">
      <h1>Die besten Odoo Hosting-Lösungen</h1>
      <p>Finden Sie die perfekte Hosting-Lösung für Ihre Odoo-Installation - Cloud, On-Premise oder Hybrid</p>
    </div>
  </section>

  <section class="features">
    <div class="container">
      <h2>Hosting-Optionen im Vergleich</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>Cloud Hosting</h3>
          <p>Flexible und skalierbare Cloud-Lösungen mit hoher Verfügbarkeit und automatischen Updates</p>
        </div>
        <div class="feature-card">
          <h3>On-Premise</h3>
          <p>Maximale Kontrolle und Datensicherheit mit lokaler Installation in Ihrem Unternehmen</p>
        </div>
        <div class="feature-card">
          <h3>Managed Hosting</h3>
          <p>Professionelle Betreuung und Wartung durch erfahrene Odoo-Experten</p>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-bottom">
        <p>&copy; 2024 Odoo Experten Deutschland. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'odoo-hosting.html'), hostingHTML);

// Create simple legal pages
const impressumHTML = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Impressum - Odoo Experten Deutschland</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav class="container">
      <div class="logo">Odoo Experten Deutschland</div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/odoo.html">Odoo</a></li>
        <li><a href="/odoo-19.html">Odoo 19</a></li>
        <li><a href="/odoo-hosting.html">Hosting</a></li>
      </ul>
    </nav>
  </header>

  <section style="padding: 120px 0 80px;">
    <div class="container">
      <h1>Impressum</h1>
      <p>Angaben gemäß § 5 TMG</p>
      <p>Diese Seite befindet sich im Aufbau.</p>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-bottom">
        <p>&copy; 2024 Odoo Experten Deutschland. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'impressum.html'), impressumHTML);

const datenschutzHTML = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Datenschutz - Odoo Experten Deutschland</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav class="container">
      <div class="logo">Odoo Experten Deutschland</div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/odoo.html">Odoo</a></li>
        <li><a href="/odoo-19.html">Odoo 19</a></li>
        <li><a href="/odoo-hosting.html">Hosting</a></li>
      </ul>
    </nav>
  </header>

  <section style="padding: 120px 0 80px;">
    <div class="container">
      <h1>Datenschutzerklärung</h1>
      <p>Datenschutz ist uns wichtig.</p>
      <p>Diese Seite befindet sich im Aufbau.</p>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-bottom">
        <p>&copy; 2024 Odoo Experten Deutschland. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'datenschutz.html'), datenschutzHTML);

// Copy public assets if they exist
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  const files = fs.readdirSync(publicDir);
  files.forEach(file => {
    const src = path.join(publicDir, file);
    const dest = path.join(outDir, file);
    if (fs.statSync(src).isFile()) {
      fs.copyFileSync(src, dest);
    }
  });
}

console.log('Static website built successfully!');
console.log(`Files created in: ${outDir}`);