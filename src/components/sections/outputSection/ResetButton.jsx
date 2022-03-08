import { useAppProvider } from "../../../context/AppContext";

const ResetButton = () => {
    const {inputValues, setInputValues, setSelectedTip, selectedTip} = useAppProvider();

    const handleClick = () => {
        console.log(inputValues);
        setInputValues({
            bill: {
                isDirty: false,
                value: 0,
            },
            peopleAmount: {
                isDirty: false,
                value: 0,
            },
            tipPercentage: {
                isDirty: false,
                value: 0,
            },
        });
        setSelectedTip({
            currentSelectedTip: null,
            lastSelectedTip: selectedTip.currentSelectedTip,
        })
    }

    return (
        <button className="output-section__reset-button"
        onClick={handleClick}>
            Reset
        </button>
    )
}

export default ResetButton;