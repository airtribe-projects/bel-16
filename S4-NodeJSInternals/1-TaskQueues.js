
// Example 1: 
// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)

// console.log("Main script");


// Example: 2

// Promise.resolve().then(() => {
//     console.log("Promise Callback");   
// })

// console.log("Main script");


// Example 3:

// setTimeout(() => { //T1
//     console.log("Main Timer")
// }, 0)


// Promise.resolve().then(() => { // P1
//     console.log("Promise Callback");   
// })

// console.log("Main script");

// Example 4: 

// for (let i=0; i< 10; i++) {
//     setTimeout(() => {
//         console.log(`Main Timer ${i}`)
//     }, 0)


//     Promise.resolve().then(() => {
//         console.log(`Promise Callback ${i}`);   
//     });
// }

// Example 5:


setTimeout(() => { // T1
    console.log("Main Timer")
}, 0)


Promise.resolve().then(() => { // P1
    console.log("Promise Callback");   
    Promise.resolve().then(() => { // P2
        console.log("Resolved inner promise");   
    })
})

console.log("Main script");