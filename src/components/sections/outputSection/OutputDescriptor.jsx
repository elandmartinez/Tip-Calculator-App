import React from "react";
import PropTypes from "prop-types";

const OutputDescriptor = ({htmlFor, children}) => {
    return (
        <label htmlFor={htmlFor}>
            <p>
                {children}
            </p>
            <span>/ person</span>
        </label>
    )
}

OutputDescriptor.propTypes = {
    children : PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired
}

export default OutputDescriptor;

//use propTypes