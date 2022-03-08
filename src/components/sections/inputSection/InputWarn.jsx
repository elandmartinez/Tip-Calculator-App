import React from "react";
import PropTypes from "prop-types";

const InputWarn = ({children}) => {
    const genericWarn = "can't use zero/negatives";

    return (
        <p className="input-warn" >{children ? children : genericWarn}</p>
    )
}

InputWarn.propTypes = {
    children: PropTypes.string
}

export default InputWarn

// use propTypes