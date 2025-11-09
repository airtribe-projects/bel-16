const asyncFunction1 = (cb) => {
    setTimeout(() => { // Timer 1
        console.log('Async Function 1');
        cb();
    }, 1000);
}

const asyncFunction2 = (cb) => {
    setTimeout(() => { // Timer 1
        console.log('Async Function 2');
        cb();
    }, 1000);
    
}

const asyncFunction3 = (cb) => {
    setTimeout(() => { // Timer 1
        console.log('Async Function 3');
        cb();
    }, 1000);
}

// Developer
// Callback hell
// Pyramid of doom

const main = () => {
    console.log('Start');    
    asyncFunction1(() => { //cb
        asyncFunction2(() =>{
            asyncFunction3(() => {
                console.log("All Completed. All Completed All Completed All Completed All Completed");
            })
        })
    });
}

// --> Drifts towards right
// 
main()
