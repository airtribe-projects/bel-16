const fs = require('fs');

const filePath = '../Assets/lengthyFile.txt';

let startRead = Date.now();

const data = fs.readFile(filePath, 'utf-8', (err, data) => {
    console.log(`File reading completed in ${Date.now() - startRead} ms`);
});


let start = Date.now()
for(let i= 0; i< 1000000; i++) {
    // console.log(`${i} Doing more work`);
}

console.log(`For Loop completed in ${Date.now() - start} ms`);
