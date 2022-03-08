import "../../../../styles/PeopleAmountInput.css";
import React, { useRef, useEffect } from "react";
import InputWarn from "../InputWarn";
import { useAppProvider } from "../../../../context/AppContext";

const PeopleAmountInput = () => {
    const { updatePeopleAmount, inputValues} = useAppProvider();
    const peopleAmountRef = useRef(null);
    const peopleAmountValue = inputValues.peopleAmount.value;
    const charEnteredIsValid = (char) => {
        if(isNaN(char) || char < 2) return false;

        return true;
    }

    let isValueEnteredValid = charEnteredIsValid(peopleAmountValue);

    if(inputValues.peopleAmount.isDirty === true){
        isValueEnteredValid = charEnteredIsValid(peopleAmountValue);
    }
    else {
        isValueEnteredValid = true;
    }

    const rewritePeopleAmount = () => {
        const peopleAmount = peopleAmountRef.current.valueAsNumber;
        let newPeopleAmount = parseInt(peopleAmount);
        updatePeopleAmount(newPeopleAmount, true);
    }

    useEffect(() => {
        if(peopleAmountValue === 0) peopleAmountRef.current.valueAsNumber = 0;
    }, [peopleAmountValue]);

    return (
        <div className="people-amount-input-cont">
            { isValueEnteredValid ? null: <InputWarn>this field must be higher than 1</InputWarn> }
            <input type="number" className="people-amount-input" onChange={rewritePeopleAmount} ref={peopleAmountRef} />
        </div>
    )
}

export default PeopleAmountInput;