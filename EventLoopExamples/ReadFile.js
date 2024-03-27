const { readFile } = require("fs");

console.log("Starting First Task");

readFile("./Content/First.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  console.log("Completed File Read");
});

console.log("Starting Next Task");
