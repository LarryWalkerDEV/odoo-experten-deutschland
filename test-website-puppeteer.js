const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

// List of pages to test
const pagesToTest = [
    { name: 'Homepage', url: 'https://odoo-experten-deutschland-ilsoe.ondigitalocean.app/' },
    { name: 'Odoo Index', url: 'https://odoo-experten-deutschland-ilsoe.ondigitalocean.app/odoo/index.html' },
    { name: 'Odoo Warehouse Article', url: 'https://odoo-experten-deutschland-ilsoe.ondigitalocean.app/odoo/odoo-warehouse.html' },
    { name: 'Odoo 19 Index', url: 'https://odoo-experten-deutschland-ilsoe.ondigitalocean.app/odoo-19/index.html' },
    { name: 'Odoo Hosting Index', url: 'https://odoo-experten-deutschland-ilsoe.ondigitalocean.app/odoo-hosting/index.html' },
    { name: 'Hosting Calculator', url: 'https://odoo-experten-deutschland-ilsoe.ondigitalocean.app/odoo-hosting-rechner.html' },
    { name: 'Impressum', url: 'https://odoo-experten-deutschland-ilsoe.ondigitalocean.app/impressum.html' },
    { name: 'Cookie Policy', url: 'https://odoo-experten-deutschland-ilsoe.ondigitalocean.app/cookie-richtlinien.html' },
    { name: 'Datenschutz', url: 'https://odoo-experten-deutschland-ilsoe.ondigitalocean.app/datenschutz.html' },
    { name: 'AGB', url: 'https://odoo-experten-deutschland-ilsoe.ondigitalocean.app/agb.html' }
];

// Create screenshots directory
async function createScreenshotsDir() {
    const dir = path.join(__dirname, 'screenshots');
    try {
        await fs.mkdir(dir, { recursive: true });
        console.log('📁 Screenshots directory created/verified');
    } catch (error) {
        console.error('Error creating screenshots directory:', error);
    }
}

// Test a single page
async function testPage(browser, pageInfo, index) {
    const page = await browser.newPage();
    
    try {
        // Set viewport for desktop
        await page.setViewport({ width: 1920, height: 1080 });
        
        console.log(`\n📍 Testing ${pageInfo.name}...`);
        console.log(`   URL: ${pageInfo.url}`);
        
        // Navigate to page with timeout
        await page.goto(pageInfo.url, { 
            waitUntil: 'networkidle2',
            timeout: 30000 
        });
        
        // Wait a bit for animations to complete
        await page.waitForTimeout(2000);
        
        // Take desktop screenshot
        const desktopScreenshot = path.join(__dirname, 'screenshots', `${index + 1}-${pageInfo.name.toLowerCase().replace(/\s+/g, '-')}-desktop.png`);
        await page.screenshot({ 
            path: desktopScreenshot,
            fullPage: true 
        });
        console.log(`   ✅ Desktop screenshot saved`);
        
        // Take mobile screenshot
        await page.setViewport({ width: 375, height: 667 });
        await page.waitForTimeout(1000);
        
        const mobileScreenshot = path.join(__dirname, 'screenshots', `${index + 1}-${pageInfo.name.toLowerCase().replace(/\s+/g, '-')}-mobile.png`);
        await page.screenshot({ 
            path: mobileScreenshot,
            fullPage: true 
        });
        console.log(`   ✅ Mobile screenshot saved`);
        
        // Check for common issues
        const issues = [];
        
        // Check if logo is visible
        const logoVisible = await page.evaluate(() => {
            const logo = document.querySelector('.logo img, .logo-img');
            return logo && logo.offsetWidth > 0 && logo.offsetHeight > 0;
        });
        if (!logoVisible) {
            issues.push('Logo not visible');
        }
        
        // Check if author images are loaded (on article pages)
        if (pageInfo.url.includes('odoo/') && !pageInfo.url.includes('index.html')) {
            const authorImageLoaded = await page.evaluate(() => {
                const authorImg = document.querySelector('.author-avatar img');
                return authorImg && authorImg.complete && authorImg.naturalHeight !== 0;
            });
            if (!authorImageLoaded) {
                issues.push('Author image not loaded');
            }
        }
        
        // Check for SVG containers
        const svgContainersVisible = await page.evaluate(() => {
            const svgs = document.querySelectorAll('.svg-container svg');
            return Array.from(svgs).every(svg => svg.getBoundingClientRect().height > 0);
        });
        if (svgContainersVisible === false) {
            issues.push('SVG visualizations not visible');
        }
        
        // Check for JavaScript errors
        const jsErrors = [];
        page.on('pageerror', error => {
            jsErrors.push(error.message);
        });
        
        // Report issues
        if (issues.length > 0 || jsErrors.length > 0) {
            console.log(`   ⚠️  Issues found:`);
            issues.forEach(issue => console.log(`      - ${issue}`));
            jsErrors.forEach(error => console.log(`      - JS Error: ${error}`));
        } else {
            console.log(`   ✨ No issues found!`);
        }
        
        return {
            page: pageInfo.name,
            url: pageInfo.url,
            issues: issues,
            jsErrors: jsErrors,
            success: issues.length === 0 && jsErrors.length === 0
        };
        
    } catch (error) {
        console.error(`   ❌ Error testing page: ${error.message}`);
        return {
            page: pageInfo.name,
            url: pageInfo.url,
            issues: [`Failed to load: ${error.message}`],
            jsErrors: [],
            success: false
        };
    } finally {
        await page.close();
    }
}

// Main test function
async function runTests() {
    console.log('🚀 Starting Odoo Experten Deutschland website tests...\n');
    
    await createScreenshotsDir();
    
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const results = [];
    
    try {
        // Test all pages
        for (let i = 0; i < pagesToTest.length; i++) {
            const result = await testPage(browser, pagesToTest[i], i);
            results.push(result);
        }
        
        // Generate summary report
        console.log('\n' + '='.repeat(80));
        console.log('📊 TEST SUMMARY');
        console.log('='.repeat(80));
        
        const successCount = results.filter(r => r.success).length;
        console.log(`\nTotal pages tested: ${results.length}`);
        console.log(`✅ Successful: ${successCount}`);
        console.log(`❌ With issues: ${results.length - successCount}`);
        
        if (results.some(r => !r.success)) {
            console.log('\n🔍 Pages with issues:');
            results.filter(r => !r.success).forEach(r => {
                console.log(`\n   ${r.page} (${r.url})`);
                r.issues.forEach(issue => console.log(`      - ${issue}`));
                r.jsErrors.forEach(error => console.log(`      - JS: ${error}`));
            });
        }
        
        // Save detailed report
        const reportPath = path.join(__dirname, 'screenshots', 'test-report.json');
        await fs.writeFile(reportPath, JSON.stringify(results, null, 2));
        console.log(`\n📄 Detailed report saved to: ${reportPath}`);
        
        console.log('\n✅ All screenshots saved to: ./screenshots/');
        
    } catch (error) {
        console.error('Fatal error during testing:', error);
    } finally {
        await browser.close();
    }
}

// Run the tests
runTests().catch(console.error);