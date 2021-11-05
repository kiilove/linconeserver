const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });
  await page.goto("http://www.enuri.com/", {
    waitUntil: "networkidle2",
  });
  await page.screenshot({ path: "example.png" });
  await page.pdf({ path: "hn.pdf", format: "a4" });

  await browser.close();
})();
