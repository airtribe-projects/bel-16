const fs = require('fs');

const readableStream = fs.createReadStream('../input/leviathan.txt', { highWaterMark: 128 * 1024 });

const writableStream = fs.createWriteStream('../output/backpressureFile.txt', { highWaterMark: 1*1024 });

readableStream.on('data', (chunk) => {
    console.log(`Read ${chunk.length} bytes`);

    const canWrite = writableStream.write(chunk);
    // Handle backpressure
    if (!canWrite) {
        console.log('Writable stream is full, pausing readable stream');
        readableStream.pause();
    }

    console.log(canWrite);
});

writableStream.on('drain', () => {
  console.log('Writable stream drained, resuming readable stream');
  readableStream.resume();
});



readableStream.on('end', () => {
  console.log('Readable stream ended');
  writableStream.end();
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});