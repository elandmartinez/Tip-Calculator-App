import "../../styles/TipCalculator.css";
import React from "react";
import InputSection from "../InputSection/index";
import OutputSection from "../OutputSection/index";
import appLogo from "../../assets/images/logo.svg";

const TipCalculator = () => {
    return (
        <div className="tip-calculator-app">
            <img src={appLogo} alt="App Logo" className="logo"/>
            <div className="tip-calculator-cont">
                <InputSection />
                <OutputSection />
            </div>
        </div>
    )
}

export default TipCalculator;
