const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const pages = [
    ['home', '/'],
    ['stats', '/relics/stats/'],
    ['aster-table', '/systems/aster-table/'],
    ['ascension', '/systems/ascension/'],
    ['admin', '/admin/configuration/']
  ];
  const report = [];

  for (const [name, route] of pages) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
    const errors = [];
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`http://127.0.0.1:8123${route}`, { waitUntil: 'networkidle' });
    const brokenImages = await page.locator('img').evaluateAll(images => images.filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src));
    await page.screenshot({ path: path.join('site-qa', `${name}-desktop.png`), fullPage: true });
    report.push({ name, route, title: await page.title(), brokenImages, errors });
    await page.close();
  }

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  const mobileErrors = [];
  mobile.on('console', msg => { if (msg.type() === 'error') mobileErrors.push(msg.text()); });
  await mobile.goto('http://127.0.0.1:8123/', { waitUntil: 'networkidle' });
  const mobileOverflow = await mobile.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  await mobile.screenshot({ path: path.join('site-qa', 'home-mobile.png'), fullPage: true });
  report.push({ name: 'home-mobile', horizontalOverflow: mobileOverflow, errors: mobileErrors });

  const calculator = await browser.newPage({ viewport: { width: 1100, height: 800 } });
  await calculator.goto('http://127.0.0.1:8123/relics/leveling/', { waitUntil: 'networkidle' });
  const xpResult = await calculator.locator('[data-relic-xp-calculator] [data-result]').innerText();
  if (!xpResult.includes('6,790') || !xpResult.includes('85 cores')) {
    throw new Error(`Unexpected XP calculator result: ${xpResult}`);
  }
  await calculator.goto('http://127.0.0.1:8123/relics/stats/', { waitUntil: 'networkidle' });
  const statResult = await calculator.locator('[data-effective-stat-calculator] [data-result]').innerText();
  if (!statResult.includes('7.00')) {
    throw new Error(`Unexpected effective-stat calculator result: ${statResult}`);
  }
  report.push({ name: 'calculators', xpResult, statResult });
  await calculator.close();

  await browser.close();
  process.stdout.write(JSON.stringify(report, null, 2));
})().catch(error => {
  process.stderr.write(error.stack || String(error));
  process.exit(1);
});
