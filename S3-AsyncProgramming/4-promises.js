const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Timer 1
            console.log('Async Function 1');
            resolve()
        }, 1000);
    })
}

const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Timer 1
            console.log('Async Function 2');
            reject({
                type: "error", 
                message: "API failed"
            }, "Param 2")
        }, 1000);
    });
}

const asyncFunction3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Timer 1
            console.log('Async Function 3');
            reject();
        }, 1000);
    });
}

const main = () => {
    console.log('Start');    
    
    
    // asyncFunction1()
    //     .then(() => {
    //         asyncFunction2()
    //             .then(() => {
    //                 asyncFunction3()
    //                     .then(() => {
    //                         console.log("All Done");
    //                     }).catch(() => {
    //                         console.log("promise failed");
    //                     });
    //             })
    //             .catch(() => {
    //                 console.log("promise failed");
    //                 asyncFunction3()
    //                     .then(() => {
    //                         console.log("All Done");
    //                     }).catch(() => {
    //                         console.log("promise failed");
    //                     });

    //             });
    //     })
    //     .catch(() => {
    //         console.log("promise failed");
    //     });

    asyncFunction1()
        .then(asyncFunction2)
        .catch((err) => {
            console.log("Reject 1: Some Error Occoured", err)
        })
        .then(asyncFunction3)
        .then(() => {
            console.log("All Done");
        })
        .catch((err) => {
            console.log("Reject 2: Some Error Occoured", err)
        })

    // console.log(p1);
    // console.log(p1);
}

// --> Drifts towards right
// 
main()
