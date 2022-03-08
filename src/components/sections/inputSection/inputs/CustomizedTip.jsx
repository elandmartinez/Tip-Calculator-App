import "../../../../styles/CustomizedTip.css"
import React, { useRef, useEffect } from "react";
import InputWarn from "../InputWarn";
import MaxNumbersWarn from "../MaxNumbersWarn";
import { useAppProvider } from "../../../../context/AppContext";

const CustomizedTip = () => {
    const { updateTipPercentage, inputValues, selectedTip, setSelectedTip} = useAppProvider();
    const maxValueAccepted = 1900;
    const customizedTipRef = useRef(null);
    const tipPercentageValue = inputValues.tipPercentage.value;
    let isValueEnteredValid;

    const maxValueReached = (value) => {
        if(value > maxValueAccepted) return true
        return false
    }
    const charEnteredIsValid = (char) => {
        if(isNaN(char) || char < 1) return false;

        return true;
    }
    let renderMaxValueWarn = maxValueReached(tipPercentageValue);

    if(inputValues.tipPercentage.isDirty === true){
        isValueEnteredValid = charEnteredIsValid(tipPercentageValue);
    }
    else {
        isValueEnteredValid = true;
    }

    useEffect(() => {
        let tipOptionsCont = (customizedTipRef.current.parentElement).parentElement;
        if(isValueEnteredValid) {
            tipOptionsCont.classList.remove("not-valid-value");
        }
        else {
            tipOptionsCont.classList.add("not-valid-value");
        }
    }, [isValueEnteredValid]);

    useEffect(() => {
        if(tipPercentageValue === 0) customizedTipRef.current.valueAsNumber = 0;
    }, [tipPercentageValue])

    useEffect(() => {
        let currentSelectedTip = selectedTip.currentSelectedTip;

        if(currentSelectedTip !== customizedTipRef.current) {
            customizedTipRef.current.valueAsNumber = 0;
        }
    }, [selectedTip]);

    const applyPercentage = () => {
        const customizedTipValue = customizedTipRef.current.valueAsNumber;
        const newTipPercentage = parseFloat(customizedTipValue, 10);
        updateTipPercentage(newTipPercentage, true);
    }

    const handleClick = () => {
        setSelectedTip({
            currentSelectedTip: customizedTipRef.current,
            lastSelectedTip: selectedTip.currentSelectedTip
        })
    }

    return (
        <div className="customized-tip">
            <input type="number" placeholder="Custom" className="customized-tip-input"
            onChange={applyPercentage} onClick={handleClick} ref={customizedTipRef}/>
            { renderMaxValueWarn ? <MaxNumbersWarn maxValue={maxValueAccepted} /> : null}
            { isValueEnteredValid ? null: <InputWarn /> }
        </div>
    )
}

export default CustomizedTip;