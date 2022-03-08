import React, {useRef} from "react";
import PropTypes from "prop-types";
import { useAppProvider } from "../../../context/AppContext";

const TipPercentageButton = ({children}) => {
    const { updateTipPercentage, selectedTip, setSelectedTip } = useAppProvider();
    const tipButtonRef = useRef(null);

    const applyPercentage = () => {
        setSelectedTip({
            currentSelectedTip: tipButtonRef.current,
            lastSelectedTip: selectedTip.currentSelectedTip
        });
        let newPercentage = parseInt(children);
        updateTipPercentage(newPercentage);
    }

    return (
        <div className="tip-percentage-button-cont">
            <button className="tip-percentage-button" onClick={applyPercentage} ref={tipButtonRef}>
                {children}%
            </button>
        </div>
    )
}

TipPercentageButton.propTypes = {
    children: PropTypes.string.isRequired
}

export default TipPercentageButton;