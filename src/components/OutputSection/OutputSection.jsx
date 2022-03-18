import "../../styles/OutputSection.css"
import React from "react";
import ValueOutput from "../ValueOutput/index.js";
import ResetButton from "../ResetButton/index.js";
import { useAppProvider } from "../../context/AppContext";

const OutputSection = () => {
    const { outputValues } = useAppProvider();

    return (
        <section className="output-section">
            <div className="output-values-cont">
                <ValueOutput
                    label="Tip amount"
                    valueOutput={outputValues.tipPerPerson}
                />
                <ValueOutput
                    label="Total"
                    valueOutput={outputValues.totalBillPerPerson}
                />
            </div>
            <ResetButton />
        </section>
    )
}

export default OutputSection;
