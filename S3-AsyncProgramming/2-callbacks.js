// 3P Library
const asyncFunction = (cb) => {
    setTimeout(() => { // Timer 1
        console.log('In between');
        cb();
        cb();
        cb();
    }, 1000);
}

// Developer
const main = () => {
    console.log('Start');    
    asyncFunction(() => { //cb
        console.log('End');
    });
}

main()
