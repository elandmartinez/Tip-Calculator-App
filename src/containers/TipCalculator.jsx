import "../styles/TipCalculator.css";
import React from "react";
import InputSection from "../components/sections/inputSection/InputSection.jsx";
import OutputSection from "../components/sections/outputSection/OutputSection.jsx";
import appLogo from "../assets/images/logo.svg";
import { useAppProvider } from "../context/AppContext";

const TipCalculator = () => {

    const { isBillEnteredValid } = useAppProvider();
    const { isTipEnteredValid } = useAppProvider();
    const { isPeopleAmountEnteredValid } = useAppProvider();
    const { modifyFinalValidator } = useAppProvider();

    /* if(isBillEnteredValid  && isTipEnteredValid && isPeopleAmountEnteredValid) modifyFinalValidator(true); */

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