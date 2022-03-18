const isBillMaxValueReached = (value, maxValueAccepted) => {
    if(value > maxValueAccepted) return true
    return false
}

const isTipMaxValueReached = (value, maxValueAccepted) => {
    if(value > maxValueAccepted) return true
    return false
}

const calcTotalBillPerPerson = (bill, tipPercentage, peopleAmount) => {
    const totalBill = ((bill/100) * tipPercentage) + bill;
    const totalBillPerPerson = totalBill / peopleAmount;
    return parseInt(totalBillPerPerson.toFixed(2));
}
const calcTipPerPerson = (bill, tipPercentage, peopleAmount) => {
    const totalTip = (bill/100) * tipPercentage;
    const tipPerPerson = totalTip / peopleAmount;
    return parseInt(tipPerPerson.toFixed(2));
}

const isValueValid = (value, valueParameter = 0) => {
    if(isNaN(value) || value <= valueParameter) return false;
    return true;
}

const areInputValuesValid = (values) => {
    if(isBillMaxValueReached(values.billValue)) return false
    if(isTipMaxValueReached(values.tipValue)) return false
    if(!isValueValid(values.billValue)) return false
    if(!isValueValid(values.tipValue)) return false
    if(!isValueValid(values.peopleAmountValue)) return false

    return true
}

export {
    isBillMaxValueReached,
    isTipMaxValueReached,
    calcTotalBillPerPerson,
    calcTipPerPerson,
    isValueValid,
    areInputValuesValid,
}