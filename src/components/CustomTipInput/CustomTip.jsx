import "../../styles/CustomizedTip.css"
import React from "react";
import PropTypes from "prop-types"
import { useAppProvider } from "../../context/AppContext";
import { actionTypes } from "../../hooks/useAppState/store";

const CustomTip = ({ value }) => {
    const { dispatch, inputValuesState} = useAppProvider();
    const error = inputValuesState.tipPercentage.error;
    const isDirty = inputValuesState.tipPercentage.isDirty;
    let className = "customized-tip-input";

    if(!isDirty) value = "";

    if(error) className = `${className} error`

    const applyPercentage = (event) => {
        const inputValue = event.target.value;
        dispatch({
            type: actionTypes.SET_TIP,
            payload: {
                value: inputValue,
                isDirty: true,
                error: inputValuesState.tipPercentage.error,
                customInputActive: true
            }
        })
    }

    return (
        <div className="customized-tip">
            <input
                type="number"
                placeholder="Custom"
                className={className}
                onChange={applyPercentage}
                value={value}
            />
            {error ? <p className="error-message-tip" >{error}</p> : null}
        </div>
    )
}

CustomTip.propTypes = {
    value: PropTypes.string.isRequired,
}

export default CustomTip;