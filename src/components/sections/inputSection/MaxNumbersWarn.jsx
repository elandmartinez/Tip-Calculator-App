import PropTypes from "prop-types";

const MaxNumbersWarn = ({maxValue}) => {
    return (
        <p className="max-value-warn">max value accepted:{maxValue}</p>
    )
}

MaxNumbersWarn.propTypes = {
    maxValue: PropTypes.number.isRequired
}

export default MaxNumbersWarn;

//use prop Types
