function balance(openingSum, interestRate, taxFreeLimit, taxRate, numMonths)
{
    while (numMonths > 0)
    {
        var monthlyInterest = openingSum * interestRate / 100;
        var monthlyTax = openingSum > taxFreeLimit
            ? (openingSum - taxFreeLimit) * taxRate / 100
            : 0;
        openingSum += monthlyInterest - monthlyTax;
        numMonths--;
    }
    return openingSum;
}

console.log(balance(10000, 1, 20000, 1, 2));
console.log(balance(25000, 2, 20000, 1, 2));
console.log(balance(19800, 2, 20000, 1, 2));

