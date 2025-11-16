
// setTimeout(() => {
//     console.log("SetTimeOut inside I/O");
// }, 0);

// setImmediate(() => {
//     console.log("setImmediate inside I/O");
// });

// process.nextTick(() => {
//     console.log('process.nextTick 1')
// });


const fs = require('fs');

fs.readFile('./test.text', () => {
    // This will be called in poll / I/O phase of event loop Phase 4
    Promise.resolve().then(() => { // P1
        console.log("promise then 1");
    })

    setTimeout(() => { // Phase 1 // T1
        console.log("SetTimeOut inside I/O");
    },200);
    
    setTimeout(() => { // Phase 1 // T1
        console.log("SetTimeOut inside I/O");
    },100);

    setImmediate(() => {    // Phase 5
        console.log("setImmediate inside I/O");
    })
});


