import React from "react";
import { useAppProvider } from "../../../../context/AppContext";

const TotalTipPerPerson = () => {
    let totalTipValue = "0.00";
    const { outputValues } = useAppProvider();

    if(outputValues.tipPerPerson !== 0 ) {
        totalTipValue = outputValues.tipPerPerson;
    }

    return (
        <div className="output-check" >
            <p>${totalTipValue}</p>
        </div>
    )
}

export default TotalTipPerPerson;