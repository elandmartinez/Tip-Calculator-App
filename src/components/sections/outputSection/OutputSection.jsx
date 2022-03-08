import "../../../styles/OutputSection.css"
import React from "react";
import ValueOutput from "./ValueOutput";
import OutputDescriptor from './OutputDescriptor';
import TotalBillPerPerson from "./totalToPay/TotalBillPerPerson";
import TotalTipPerPerson from "./totalToPay/TotalTipPerPerson";
import ResetButton from "./ResetButton";

const OutputSection = () => {
    return (
        <section className="output-section">
            <div className="output-values-cont">
                <ValueOutput>
                    <OutputDescriptor htmlFor="tip-amount-output" >Tip Amount</OutputDescriptor>
                    <TotalTipPerPerson />
                </ValueOutput>
                <ValueOutput>
                    <OutputDescriptor htmlFor="total-to-pay-output">Total</OutputDescriptor>
                    <TotalBillPerPerson />
                </ValueOutput>
            </div>
            <ResetButton />
        </section>
    )
}

export default OutputSection;