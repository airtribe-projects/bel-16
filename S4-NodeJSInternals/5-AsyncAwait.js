
// Example: 1
const internalCall = async () => {
    console.log("Internal log");
}


const main = async () => {
    setTimeout(() => { // T1
        console.log('Log from timer');
    }, 0);
    
    Promise.resolve().then(() => {  //P1
        console.log("Hello there");
    })

    await internalCall();
    
    console.log("This is the end");
}

main();
