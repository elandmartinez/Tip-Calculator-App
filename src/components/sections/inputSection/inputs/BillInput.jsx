import "../../../../styles/BillInput.css";
import React, { useRef, useEffect } from "react";
import InputWarn from "../InputWarn";
import MaxNumbersWarn from "../MaxNumbersWarn";
import { useAppProvider } from "../../../../context/AppContext";
import { renderIntoDocument } from 'react-dom/test-utils';

const BillInput = () => {
    const { updateBill, inputValues} = useAppProvider();
    const inputRef = useRef(null);
    const billValue = inputValues.bill.value;
    const maxValueAccepted = 9999;
    const maxValueReached = (value) => {
        if(value > maxValueAccepted) return true
        return false
    }
    const charEnteredIsValid = (char) => {
        if(isNaN(char) || char < 1) return false;

        return true;
    }

    let renderMaxValueWarn = maxValueReached(billValue);

    let isValueEnteredValid = charEnteredIsValid(billValue);
    if(inputValues.bill.isDirty === true){
        isValueEnteredValid = charEnteredIsValid(billValue);
    }
    else {
        isValueEnteredValid = true;
    }

    const handleChange = () => {
        const inputValue = inputRef.current.valueAsNumber;
        const newBill = parseFloat(inputValue, 10);
        updateBill(newBill, true);
    }

    useEffect(() => {
            if(billValue === 0) return inputRef.current.valueAsNumber = 0;
    }, [billValue, inputValues.bill.isDirty])

    return (
        <div className="bill-input-cont">
            { isValueEnteredValid ? null : <InputWarn />}
            { renderMaxValueWarn ? <MaxNumbersWarn maxValue={maxValueAccepted} /> : null}
            <input type="number" className="bill-input" onChange={handleChange} ref={inputRef} />
        </div>
    )
}

export default BillInput;

