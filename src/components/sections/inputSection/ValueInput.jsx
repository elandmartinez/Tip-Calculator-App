import "../../../styles/ValueInput.css"
import React from "react";
import PropTypes from "prop-types";

const ValueInput = ({children}) => {
    return (
    <div className="value-input">
        {children}
    </div>
    )
}

ValueInput.propTypes = {
    children: PropTypes.node.isRequired
}

export default ValueInput;

// use propTypes