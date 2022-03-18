import "../../styles/ValueOutput.css";
import React from "react";
import PropTypes from "prop-types";
import { useAppProvider } from '../../context/AppContext';

const ValueOutput = ({ label, valueOutput}) => {
    let output = "0.00";

    if(valueOutput) output = valueOutput;

    return (
        <div className="value-output">
            <p className="output-description">
                {label}
                <span>/ person</span>
            </p>
            <p className="output-value">
                ${output}
            </p>
        </div>
    )
}

ValueOutput.propTypes = {
    label: PropTypes.string.isRequired,
    valueOutput: PropTypes.number.isRequired
}

export default ValueOutput;
