import "../../styles/ValueInput.css"
import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon/index.js"

const ValueInput = ({label, iconName, type, error, className, value, handleOnChange, updateContextFunction}) => {
    if(error) className = `${className} error`;

    const handleChange = (event) => {
        handleOnChange(event, updateContextFunction)
    }

    return (
        <div className="value-input">
            <label htmlFor={label}>{label}</label>
            <Icon name={iconName} className="icon" />
            <input type={type} onChange={handleChange} className={className} value={value} />
            {error ? <p className="error-message" >{error}</p> : null}
        </div>
    )
}

ValueInput.propTypes = {
    label: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
}

export default ValueInput;
