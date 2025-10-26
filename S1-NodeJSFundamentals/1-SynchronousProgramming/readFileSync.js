const fs = require('fs');

const filePath = '../Assets/lengthyFile.txt';

let readStart = Date.now();

const data = fs.readFileSync(filePath, 'utf-8');

console.log(`File reading completed in ${Date.now() - readStart} ms`);

let start = Date.now()
for(let i= 0; i< 1000000; i++) {
    // console.log(`${i} Doing more work`);
}

console.log(`For Loop completed in ${Date.now() - start} ms`);
