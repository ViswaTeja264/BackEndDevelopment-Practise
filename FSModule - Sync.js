const { readFileSync, writeFileSync, write } = require('fs');

const First = readFileSync('./Content/First.txt', 'utf8');
const Second = readFileSync('./Content/Second.txt', 'utf8');

console.log(First);
console.log(Second);

writeFileSync(
 './Content/Result-Sync.txt',
 `Here Is The Result : ${First} , ${Second}`, 
 { flag : 'a' }
);