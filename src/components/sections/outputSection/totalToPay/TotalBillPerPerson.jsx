import React from "react";
import { useAppProvider } from "../../../../context/AppContext";


const TotalBillPerPerson = () => {
    const { outputValues } = useAppProvider();
    let totalBillValue = "0.00";

    if(outputValues.totalBillPerPerson !== 0) {
        totalBillValue = outputValues.totalBillPerPerson;
    }

    return (
        <div className="output-check" >
            <p>${totalBillValue}</p>
        </div>
    )
}

export default TotalBillPerPerson;