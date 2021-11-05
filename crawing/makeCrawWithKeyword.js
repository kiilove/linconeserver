const fs = require("fs");
const cheerio = require("cheerio");

const makeCrawWithKeyword = async (fileUri) => {
  //console.log(fileUri);
  const workFile = fs.readFileSync(fileUri, "utf-8");
  //console.log(workFile);
  const $ = cheerio.load(workFile);
  let Ranking = [];
  let modelAttr = [];
  let tags = [];
  let searchKeys = [];
  let launchDates = [];

  const makeAttr = () => {
    $(".item__attr").each(function (i, e) {
      modelAttr[i] = $(this).text();
    });
    //console.log(modelAttr);
    return modelAttr;
  };

  const makeTags = () => {
    $(".item__attr").each(function (i, e) {
      modelAttr[i] = $(this).text();
      tags[i] = modelAttr[i].split("|");
    });

    return tags;
  };

  const searchKeyword = () => {
    $(".sr-related__item").each(function (i, e) {
      searchKeys[i] = $(this).text().replace("\t", "").replace("    ", "");
    });
    return searchKeys;
  };

  const launchDate = () => {
    $(".item__etc--date").each(function (i, e) {
      launchDates[i] = $(this).text().replace("등록일 ", "");
    });
    return launchDates;
  };

  //console.log($(".item__etc--date").text());

  console.log(launchDate());
  //console.log($(".sr-related__tx-item em").toArray());

  const searchResult = () => {
    makeAttr(); // item__attr 배열 구성을 위해 호출
    makeTags(); // item__attr을 쪼개서 태그값을 치환하기 위해 호출
    searchKeyword(); // 검색 키워드 추가
    launchDate(); //에누리상에는 등록일이지만 출시일로 정리함

    $(".tag--rank").each(function (i, e) {
      Ranking[i] = {
        rank: $(this).text(),
        link: $(this).next().attr("href"),
        name: $(this).next().text(),
        attr: modelAttr[i],
        date: launchDates[i],
        tag: tags[i],
        keyword: searchKeys,
      };
    });

    return Ranking;
  };

  return searchResult();
};

module.exports = makeCrawWithKeyword;
