const router = require("express").Router();
const createFileWithKeyword = require("../crawing/createFileWithKeyword");
const makeCrawWithKeyword = require("../crawing/makeCrawWithKeyword");
const checkExistFile = require("../crawing/checkExistFile");

//모델의 상세URL을 통한 크롤링 => 세부 스펙 목록 받아옴
// router.get("/search/url", async (req, res) => {
//   try {
//     const fileStatus = await checkExistFile(req.query.url);
//     console.log(fileStatus.result);
//     const savedFile = !fileStatus.result
//       ? await createFileWithKeyword(req.query.url)
//       : fileStatus.uri;
//     console.log(savedFile);
//     const crawResult = await SearchType(savedFile);
//     res.status(200).json(crawResult);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//키워드 검색을 통한 크롤링=> 결과값은 모델 목록 받아옴
router.get("/search/keyword", async (req, res) => {
  //console.log(req.query.url);
  try {
    const htmlInfo = await createFileWithKeyword(req.query.url);
    const crawResult = await makeCrawWithKeyword(htmlInfo.fileUri);
    // const crawResult = await makeCrawWithKeyword(
    //   "./crawingFiles/KeywordList15z95n.html"
    // );
    res.status(200).json(crawResult);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
