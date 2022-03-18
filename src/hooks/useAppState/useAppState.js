import { useState, useEffect, useReducer } from "react"
import {
    inputValuesReducer,
    actionTypes,
    initialInputValuesState
} from "./store";

import {
    isBillMaxValueReached,
    isTipMaxValueReached,
    calcTotalBillPerPerson,
    calcTipPerPerson,
    isValueValid,
    areInputValuesValid
} from "./helpers"

import {
    maxBillValueAccepted,
    maxTipValueAccepted,
    higherThanCeroMessage,
    onlyNumbersMessage,
} from "../../utils/constants"

/**
 * Code review
 * - use actionTypes to avoid typos: done
 * - create utils/constants.js and save there all reusable constants: done
 * - Remove big spaces between elements
 */

const useAppState = () => {

    const [inputValuesState, dispatch] = useReducer(inputValuesReducer, initialInputValuesState);
    const [outputValues, setOutputValues] = useState({
        totalBillPerPerson: 0,
        tipPerPerson: 0,
    });

    useEffect(() => {

        let billErrorMessage = "";
        let tipErrorMessage = "";
        let peopleErrorMessage = "";

        if(isBillMaxValueReached(parseInt(inputValuesState.bill.value), parseInt(maxBillValueAccepted))) {
            billErrorMessage = `Max number handled : ${maxBillValueAccepted}`
        }
        if(isTipMaxValueReached(parseInt(inputValuesState.tipPercentage.value), parseInt(maxTipValueAccepted))) {
            tipErrorMessage = `Max value handled: ${maxTipValueAccepted}`;
        }

        const billValueIsValid = isValueValid(parseInt(inputValuesState.bill.value));
        const peopleAmountIsValid = isValueValid(parseInt(inputValuesState.peopleAmount.value), 1);
        const tipPercentageIsValid = isValueValid(parseInt(inputValuesState.tipPercentage.value));

        if(!billValueIsValid && inputValuesState.bill.isDirty === true) {
            billErrorMessage = higherThanCeroMessage;
            if(inputValuesState.bill.value === "") billErrorMessage = onlyNumbersMessage;
        }
        if(!peopleAmountIsValid && inputValuesState.peopleAmount.isDirty === true) {
            peopleErrorMessage = " * must be higher than 1";
            if(inputValuesState.peopleAmount.value === "") peopleErrorMessage = onlyNumbersMessage;
        }
        if(!tipPercentageIsValid && inputValuesState.tipPercentage.isDirty === true) {
            tipErrorMessage = higherThanCeroMessage;
            if(inputValuesState.tipPercentage.value === "") tipErrorMessage = onlyNumbersMessage;
        }

        dispatch({
            type: actionTypes.SET_ERRORS,
            payload: {
                billError: billErrorMessage,
                tipError: tipErrorMessage,
                peopleError: peopleErrorMessage
            }
        })
    }, [
        inputValuesState.bill.value,
        inputValuesState.tipPercentage.value,
        inputValuesState.peopleAmount.value,
        inputValuesState.bill.isDirty,
        inputValuesState.tipPercentage.isDirty,
        inputValuesState.peopleAmount.isDirty,
    ]);

    useEffect(() => {
        setOutputValues({
            totalBillPerPerson: 0,
            tipPerPerson: 0
        });

        const values = {
            billValue: inputValuesState.bill.value,
            tipValue: inputValuesState.tipPercentage.value,
            peopleAmountValue: inputValuesState.peopleAmount.value,
        }

        if(!areInputValuesValid(values)) return

        const outputTipPerPerson = calcTipPerPerson(
            parseInt(inputValuesState.bill.value),
            parseInt(inputValuesState.tipPercentage.value),
            parseInt(inputValuesState.peopleAmount.value)
        )
        const totalOutputBillPerPerson = calcTotalBillPerPerson(
            parseInt(inputValuesState.bill.value),
            parseInt(inputValuesState.tipPercentage.value),
            parseInt(inputValuesState.peopleAmount.value)
        )

        setOutputValues({
            totalBillPerPerson: totalOutputBillPerPerson,
            tipPerPerson: outputTipPerPerson
        })
    }, [inputValuesState])

    return {
        inputValuesState,
        outputValues,
        dispatch,
    }
}

export default useAppState;
export { initialInputValuesState }
