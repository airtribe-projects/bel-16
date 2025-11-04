// Example 1: Synchronous Execution

// console.log('Start');
// console.log('In between');
// console.log('End');


// // Example 2: Async Execution
// console.log('Start');

// setTimeout(() => {
//     console.log('In between');
// }, 0);

// console.log('End');


// Example 3: 
const main = () => {
    console.log('Start');
    const start = Date.now();
    
    setTimeout(() => { // Timer 1
                console.log('In between', Date.now() -  start);
    }, 1000);

    console.log('End');

    for (let i=0; i < 1000000; i++) {
        console.log(i);
    }
}

main()

// Timer1()
// Callstack --> // Main thread, does the synchronous code execution


// EventLoop
// 1. Whether callstack is empty or not
// 2. See if there is any function that can be scheduled on the callstack 


// Blackbox (IO Threads)
//  --> Ready to schedule

