import "../../styles/InputSection.css"
import React from "react";
import TipPercentageButton from "../TipPercentageButton/index";
import CustomTipInput from "../CustomTipInput/index";
import ValueInput from '../ValueInput/index.js';
import { useAppProvider } from "../../context/AppContext";
import { actionTypes } from "../../hooks/useAppState/store";

const InputSection = () => {

    const { inputValuesState, dispatch } = useAppProvider();

/*     const handleValueInputChange = (event, updateContextFunc) => {
        const inputValue = event.target.value;
        console.log(inputValue);
        updateContextFunc(inputValue, true);
    }
 */
    const handleBillChange = (e) => {
        const inputValue = e.target.value;
        dispatch({
            type: actionTypes.SET_BILL,
            payload: {
                ...inputValuesState.bill,
                value: inputValue,
                isDirty: true,
            }
        })
    }

    const handlePeopleChange = (e) => {
        const inputValue = e.target.value;
        dispatch({
            type: actionTypes.SET_PEOPLE,
            payload: {
                ...inputValuesState.peopleAmount,
                value: inputValue,
                isDirty: true,
            }
        })
    }

    return (
        <section className="input-section">
            <ValueInput
                label="Bill input"
                iconName="dollarIcon"
                type="number"
                error={inputValuesState.bill.error}
                className="input bill"
                value={inputValuesState.bill.value}
                handleOnChange={handleBillChange}
            />
            <div className="tips-cont">
                <label htmlFor="select tip">Select tip %</label>
                <div className="tips-options">
                    <TipPercentageButton percentage="5" />
                    <TipPercentageButton percentage="10" />
                    <TipPercentageButton percentage="15" />
                    <TipPercentageButton percentage="25" />
                    <TipPercentageButton percentage="50" />
                    <CustomTipInput value={inputValuesState.tipPercentage.value}/>
                </div>
            </div>
            <ValueInput label="Number of people" iconName="personIcon" type="number"
            error={inputValuesState.peopleAmount.error}
            className="input people-amount" value={inputValuesState.peopleAmount.value}
            handleOnChange={handlePeopleChange}
            />
        </section>
    )
}

export default InputSection;
