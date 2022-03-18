import { useAppProvider } from "../../context/AppContext";
import { actionTypes } from "../../hooks/useAppState/store";

const ResetButton = () => {
    const { dispatch } = useAppProvider();

    const handleClick = () => {
        dispatch({
            type: actionTypes.SET_INITIAL_STATE,
        })
    }

    return (
        <button className="output-section__reset-button" onClick={handleClick}>
            Reset
        </button>
    )
}

export default ResetButton;