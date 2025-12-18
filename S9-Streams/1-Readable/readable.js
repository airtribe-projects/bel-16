const fs = require('fs');

const readableStream = fs.createReadStream('../input/leviathan.txt', {encoding: 'utf-8', highWaterMark: 1 * 1024});

readableStream.on('data', (chunk) => {
    console.log('Received the chunk', chunk);
});

readableStream.on('end', () => {
    console.log('#####################')
    console.log('No more data to read.');
});

readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});

