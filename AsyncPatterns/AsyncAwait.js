const { readFile, writeFile } = require("fs").promises;

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

//By Using Async Await
const start = async () => {
  try {
    const first = await readFile('./Content/First.txt', 'utf8');
    const second = await readFile('./Content/Second.txt', 'utf8');
    await writeFile('./Content/Result-WriteFile.txt', `Hello Guys | ${first} || ${second}`);
    console.log(first + " || " + second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./Content/First.txt")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
