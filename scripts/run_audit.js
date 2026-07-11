import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log('PAGE LOG:', msg.text());
  });

  await page.goto('http://localhost:3000/audit', { waitUntil: 'networkidle0' });
  
  console.log('Waiting for audit to finish...');
  
  // Wait until the text "Done!" appears
  await page.waitForFunction(
    () => document.body.innerText.includes('Done!'),
    { timeout: 300000 } // 5 minutes
  );
  
  const results = await page.evaluate(() => {
    const pre = document.querySelector('pre');
    return pre ? pre.innerText : null;
  });
  
  if (results) {
    fs.writeFileSync('audit_results.json', results);
    console.log('Results saved to audit_results.json');
  } else {
    console.log('Could not find results');
  }
  
  await browser.close();
})();
