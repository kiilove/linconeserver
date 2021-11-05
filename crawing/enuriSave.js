const puppeteer = require("puppeteer");
const fs = require("fs");

const createFileWithSearch = async (ppUrl) => {
  const urlArray = ppUrl.split("keyword=");
  const createFileName = `Search${urlArray[1]}.html`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(ppUrl, { waitUntil: "networkidle2" });
  await page.waitFor(10000);
  const bodyDecoded = await page.content();
  fs.writeFileSync(`./crawingFiles/${createFileName}`, bodyDecoded); // 동기로 파일작성
  await browser.close();
  return createFileName;
};

module.exports = createFileWithSearch;
