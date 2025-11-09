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

const asyncFunction3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Timer 1
            console.log('Async Function 3');
            resolve(3);
        }, 3000);
    });
}

const sum =  (a, b) => {
    throw new Error("Something happened");
    return a + b
};


// async await

const main =  async () => {
    let result;
    try {
        result = await sum();
        
    } catch (e) {
        console.log("error", e);
    }
    console.log(result);
    
}

main()
