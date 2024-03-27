const { createReadStream } = require("fs");

const stream = new createReadStream("./Content/BigFile.txt", "utf8");

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (error) => {
  console.log(error);
});
