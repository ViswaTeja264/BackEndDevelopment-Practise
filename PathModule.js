const path = require('path');

console.log(path.sep);

const filePath = path.join('/Content', 'SubFolder', 'Text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'Content', 'SubFolder', 'Text.txt');
console.log(absolute);