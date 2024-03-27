const { writeFileSync } = require('fs');
for(let i = 0; i < 10000; i++) {
    writeFileSync('./Content/BigFile.txt', `Hello World ${i}`, { flag : a })
}