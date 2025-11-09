const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Timer 1
            console.log('Async Function 1');
            resolve(1)
        }, 1000);
    })
}

const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Timer 1
            console.log('Async Function 2');
            reject(2)
        }, 2000);
    });
}

const asyncFunction3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Timer 1
            console.log('Async Function 3');
            reject(3);
        }, 3000);
    });
}

const main = () => {
    console.log('Start');    
    // All: Waits for all promise to fulfil, fails in case of any rejection
    // const all = Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    // AllSettled: Waits for the status of each promise either resolved or rejected and gives you the corresponding values 
    // const all = Promise.allSettled([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    
    // any: Waits for the first promise to resolve
    // const any = Promise.any([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    
    // race: Waits for the first promise to settle
    const any = Promise.race([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    


    any.then((res) => {
        console.log("Resolve:", res);
    }).catch(err => {
        console.log("Reject:", err);
    })

    console.log(any);   // Pending state of all the promises

    console.log("End");
    
}

// --> Drifts towards right
// 
main()
