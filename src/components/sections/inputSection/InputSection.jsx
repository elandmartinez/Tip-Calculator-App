import "../../../styles/InputSection.css"
import React from "react";
import ValueInput from "./ValueInput";
import InputDescriptor from './InputDescriptor';
import BillInput from './inputs/BillInput';
import TipPercentageButton from "./TipPercentageButton";
import CustomizedTip from './inputs/CustomizedTip';
import PeopleAmountInput from './inputs/PeopleAmountInput';
import dollarIcon from "../../../assets/icons/icon-dollar.svg";
import personIcon from "../../../assets/icons/icon-person.svg";

const InputSection = () => {

    return (
        <section className="input-section">
            <ValueInput>
                <div className="input-descriptor-cont">
                    <InputDescriptor>Bill</InputDescriptor>
                </div>
                <img src={dollarIcon} alt="dollar icon" />
                <BillInput />
            </ValueInput>
            <div className="tips-cont">
                <InputDescriptor>Select Tip %</InputDescriptor>
                <div className="tips-options">
                    <TipPercentageButton>5</TipPercentageButton>
                    <TipPercentageButton>10</TipPercentageButton>
                    <TipPercentageButton>15</TipPercentageButton>
                    <TipPercentageButton>25</TipPercentageButton>
                    <TipPercentageButton>50</TipPercentageButton>
                    <CustomizedTip />
                </div>
            </div>
            <ValueInput>
                <div className="input-descriptor-cont">
                    <InputDescriptor>Number of People</InputDescriptor>
                </div>
                <img src={personIcon} alt="person icon" />
                <PeopleAmountInput />
            </ValueInput>
        </section>
    )
}

export default InputSection;