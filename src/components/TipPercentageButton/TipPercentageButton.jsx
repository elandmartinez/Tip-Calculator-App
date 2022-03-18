import React from "react";
import PropTypes from "prop-types";
import { useAppProvider } from "../../context/AppContext";
import { actionTypes } from "../../hooks/useAppState/store";

const TipPercentageButton = ({ percentage }) => {
    const { inputValuesState, dispatch } = useAppProvider();
    let active = percentage === inputValuesState.tipPercentage.value && inputValuesState.tipPercentage.customInputActive === false;
    const btnClassName = active ? "tip-percentage-button tip-button-active": "tip-percentage-button"

    const applyPercentage = () => {
        dispatch({
            type: actionTypes.SET_TIP,
            payload: {
                value: percentage,
                isDirty: false,
                error: false,
                customInputActive: false
            }
        })
    }

    return (
        <div className="tip-percentage-button-cont">
            <button
                className={btnClassName}
                onClick={applyPercentage}
            >
                {percentage}%
            </button>
        </div>
    )
}

TipPercentageButton.propTypes = {
    percentage: PropTypes.string.isRequired,
}

export default TipPercentageButton;