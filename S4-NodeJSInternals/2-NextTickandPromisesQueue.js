// Example 1: 
// setTimeout(() => { // T1
//     console.log("Main Timer")
// }, 0)


// Promise.resolve().then(() => { // P1
//     console.log("Promise Callback");   
// })

// console.log("Main script");

// process.nextTick(() => console.log('process.nextTick')); // NT1


// Example 2:
// setTimeout(() => {  // T1
//     console.log("Main Timer")
// }, 0)

// process.nextTick(() => console.log('process.nextTick 1'));  //N1

// Promise.resolve().then(() => {  // P1
//     console.log("Promise Callback 1");   

// })

// process.nextTick(() => console.log('process.nextTick 2'));  // N2

// Promise.resolve().then(() => {  // P2
//     console.log("Promise Callback 2");   

// })

// console.log("Main script");


// Example 3:

// setTimeout(() => {      // T1
//     console.log("Timer 1")
//     Promise.resolve().then(() => { //P1
//         console.log("Resolved inner promise");   
//     })
// }, 0)

// setTimeout(() => { // T2
//     console.log("Timer 2")
// }, 0)


// console.log("Main script");



