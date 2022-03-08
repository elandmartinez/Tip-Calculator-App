import React from "react";
import PropTypes from "prop-types";

const InputDescriptor = ({ children }) => {
    return (
        <p >
            {children}
        </p>
    )
}

InputDescriptor.propTypes = {
    children: PropTypes.string.isRequired
}

export default InputDescriptor;

//use propTypes