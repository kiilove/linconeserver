const fs = require("fs");

const checkExistFile = async (props) => {
  const urlSplit = props.split("keyword=");
  const fileUri = `./crawingFiles/List${urlSplit[1]}.html`;

  console.log(fileUri);
  // const fileCheck = async () => {
  //   await fs.exists(fileUri, (res) => {
  //     return res;
  //   });
  // };

  const checkFile = fs.existsSync(fileUri);
  console.log(checkFile);
  return { result: checkFile, uri: fileUri };
};

module.exports = checkExistFile;
