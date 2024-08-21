function reportExpenses(balanceSheet) {
    let expenseCount = 0;
    let expenseSum = 0;
    let incomeSum = 0

    for (let i = 0; i < balanceSheet.length; i++) {
        if (typeof balanceSheet[i] === 'string') {
            let amount = parseFloat(balanceSheet[i].replace(/[$]/g, ''));
            if (amount < 0 && amount !== 0) {
                expenseCount++;
                expenseSum += Math.abs(amount);
            }
            else{
                incomeSum += Math.abs(amount)
            }
        }
    }

    return `expenseCount: ${expenseCount}, expenseSum: ${expenseSum}, incomeSum: ${incomeSum}`;
}

console.log(reportExpenses(["$1.23", "-5", "-$4.23" , "6.53"]));
console.log(reportExpenses(['0', '-1', '1', '2']));