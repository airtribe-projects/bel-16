const { Transform } = require('stream');
const fs = require('fs');

const lowerCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toLowerCase());
        callback();
}
});

const readableStream = fs.createReadStream('../input/leviathan.txt', { encoding: 'utf8' });
const writableStream = fs.createWriteStream('../output/leviathanLowercase.txt');

readableStream
    .pipe(lowerCaseTransform)
    .pipe(writableStream);

writableStream.on('finish', () => {
    console.log('Finished transforming and writing to file.');
});