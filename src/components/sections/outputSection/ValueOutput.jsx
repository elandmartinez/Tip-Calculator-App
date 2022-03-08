import "../../../styles/ValueOutput.css";
import React from "react";
import PropTypes from "prop-types";

const ValueOutput = ({children}) => {
    return (
        <div className="value-output">
            {children}
        </div>
    )
}

ValueOutput.propTypes = {
    children: PropTypes.node.isRequired
}

export default ValueOutput;

// use propTypes
