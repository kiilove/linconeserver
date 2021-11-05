const puppeteer = require("puppeteer");
const fs = require("fs");

const createFileWithKeyword = async (ppUrl) => {
  const urlArray = ppUrl.split("keyword=");
  const createKeywordList = `KeywordList${urlArray[1]}.html`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(ppUrl, { waitUntil: "networkidle2" });
  await page.waitFor(3000);
  const bodyDecoded = await page.content();
  fs.writeFileSync(`./crawingFiles/${createKeywordList}`, bodyDecoded); // 동기로 파일작성
  await browser.close();

  //console.log(`./crawingFiles/${createKeywordList}`);

  return {
    fileName: createKeywordList,
    fileUri: `./crawingFiles/${createKeywordList}`,
  };
};

module.exports = createFileWithKeyword;
