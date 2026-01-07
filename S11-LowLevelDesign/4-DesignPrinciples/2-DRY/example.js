// Before DRY
const calculateTotal = (amount) => {
    let tax = 0.1 * amount;
    let total = amount + tax;
    return total;
}

const calculateFinalTotal = (amount) => {
    let tax = 0.1 * amount;
    let finalTotal = amount * 1.1 + tax;
    return finalTotal;
}

// After DRY
const calculateTotalUsingDRY = (amount, includeFinal) => {
    let tax = 0.1 * amount;

    if (includeFinal) {
        amount = amount * 1.1;
    }
       
    return amount + tax;
}



