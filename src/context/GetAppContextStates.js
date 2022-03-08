import { useState, useEffect, useCallback } from "react"

// action -> reducer -> store -> view

const GetAppContextStates = () => {

    //use little states instead of a whole big one: done
    //the validation of the value entered must be done here: done
    //when  billValue changes, then do validations, not before: done
    //change the name of this hook ( getAppContextStates"): done
    //set the input warn inside the respective inputs: done

    const [inputValues, setInputValues] = useState({
        bill: {
            isDirty: false,
            value: 0,
        },
        peopleAmount: {
            isDirty: false,
            value: 0,
        },
        tipPercentage: {
            isDirty: false,
            value: 0,
        },
    })

    const [selectedTip, setSelectedTip] = useState({
        currentSelectedTip: null,
        lastSelectedTip: null,
    });

    const [outputValues, setOutputValues] = useState({
        totalBillPerPerson: 0,
        tipPerPerson: 0,
    });

    const resolveTotalBillPerPerson = (bill, tipPercentage, peopleAmount) => {
        const totalBill = ((bill/100) * tipPercentage) + bill
        const totalBillPerPerson = totalBill / peopleAmount;
        return totalBillPerPerson.toFixed(2);
    }
    const resolveTipPerPerson = (bill, tipPercentage, peopleAmount) => {
        const totalTip = (bill/100) * tipPercentage;
        const tipPerPerson = totalTip / peopleAmount;
        return tipPerPerson.toFixed(2);
    }

    const maxValueReached = (value) => {
        if(value > 9999) return true
        return false
    }

    const updateBill = (newBill, newIsDirty) => {
        console.log("bill update");
        setInputValues({
            ...inputValues,
            bill: {
                isDirty: newIsDirty,
                value: newBill
            }
        })
    }

    const updatePeopleAmount = (newPeopleAmount, newIsDirty) => {
        console.log("people update");
        setInputValues({
            ...inputValues,
            peopleAmount: {
                isDirty: newIsDirty,
                value: newPeopleAmount
            }
        })
    }
    const updateTipPercentage = (newTipPercentage, newIsDirty) => {
        console.log("tip update");
        setInputValues({
            ...inputValues,
            tipPercentage: {
                isDirty: newIsDirty,
                value: newTipPercentage,
            }
        })
    }

    const updateSelectedTip = useCallback(() => {
        console.log(selectedTip);
        const selectedTipSpecialClass = "selected-tip-button"
        if(selectedTip.lastSelectedTip !== null){
            selectedTip.lastSelectedTip.classList.remove(selectedTipSpecialClass);
        }
        if(selectedTip.currentSelectedTip === null) return

        selectedTip.currentSelectedTip.classList.add(selectedTipSpecialClass);
    }, [selectedTip]);

    const billValueIsValid = (billValue) => {
        if(isNaN(billValue) || billValue < 1) return false;
        return true;
    }

    const peopleAmountIsValid = (peopleAmount) => {
        if(isNaN(peopleAmount) || peopleAmount < 2) return false;
        return true;
    }

    const tipPercentageIsValid = (tipPercentage) => {
        if(isNaN(tipPercentage) || tipPercentage < 1) return false;
        return true;
    }

    useEffect(() => {
        updateSelectedTip();
    }, [updateSelectedTip]);

    useEffect(() => {
        //validate values
        let anyInputMaxValueReached = false;
        if(maxValueReached(inputValues.bill.value) || maxValueReached(inputValues.tipPercentage.value)) {
            anyInputMaxValueReached = true;
        }

        const isBillValueValid = billValueIsValid(inputValues.bill.value);
        const isPeopleAmountValid = peopleAmountIsValid(inputValues.peopleAmount.value);
        const isTipPercentageValid = tipPercentageIsValid(inputValues.tipPercentage.value);

        setOutputValues({
            totalBillPerPerson: 0,
            tipPerPerson: 0
        });

        if(!isBillValueValid || !isPeopleAmountValid || !isTipPercentageValid || anyInputMaxValueReached) return

        const outputTipPerPerson = resolveTipPerPerson(
            inputValues.bill.value,
            inputValues.tipPercentage.value,
            inputValues.peopleAmount.value
        )
        const totalOutputBillPerPerson = resolveTotalBillPerPerson(
            inputValues.bill.value,
            inputValues.tipPercentage.value,
            inputValues.peopleAmount.value,
        )

        setOutputValues({
            totalBillPerPerson: totalOutputBillPerPerson,
            tipPerPerson: outputTipPerPerson
        })

    }, [
        inputValues.bill,
        inputValues.peopleAmount,
        inputValues.tipPercentage,
    ]);

    return {
        inputValues,
        outputValues,
        updateBill,
        updatePeopleAmount,
        updateTipPercentage,
        updateSelectedTip,
        selectedTip,
        setInputValues,
        setSelectedTip,
    }
}

export default GetAppContextStates;
