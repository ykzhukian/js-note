const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
    devtools: true,
  });
  const page = await browser.newPage();
  await page.goto('https://gokorean.koreanair.com/');
  await browser.close();
})();
