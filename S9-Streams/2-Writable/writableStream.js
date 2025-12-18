const fs = require('fs');

const writableStream = fs.createWriteStream('../output/largeTextResponse.txt');

const start =  Date.now();
console.log('Start: ', start);
writableStream.write('Hello World!\n');

for (let i=0; i<500000; i++) {
    writableStream.write(`Hello World!: ${i}\n`);    
}

writableStream.end(() => {
    console.log("Finished Writing data to the stream");
})

console.log('Diff: ', Date.now() - start);

writableStream.on('error', (err) => {
    console.error('Error writing file:', err);
});

