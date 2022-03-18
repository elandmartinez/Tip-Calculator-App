const initialInputValuesState = {
    bill: {
        value: " ",
        isDirty: false,
        error: "",
    },
    peopleAmount: {
        value: " ",
        isDirty: false,
        error: "",
    },
    tipPercentage: {
        value: " ",
        isDirty: false,
        customInputActive: false,
        error: "",
    }
}

const actionTypes = {
    SET_BILL: "SET_BILL",
    SET_PEOPLE: "SET_PEOPLE",
    SET_TIP: "SET_TIP",
    SET_ERRORS: "SET_ERRORS",
}

const inputValuesReducer = (state, action) => {
    switch(action.type) {
        case "SET_BILL":
            return {
                ...state,
                bill: {
                    value: action.payload.value,
                    isDirty: action.payload.isDirty,
                    error: action.payload.error
                }
            }
        case "SET_PEOPLE":
            return {
                ...state,
                peopleAmount: {
                    value: action.payload.value,
                    isDirty: action.payload.isDirty,
                    error: action.payload.error
                }
            }
        case "SET_TIP":
            return {
                ...state,
                tipPercentage: {
                    value: action.payload.value,
                    isDirty: action.payload.isDirty,
                    customInputActive: action.payload.customInputActive,
                    error: action.payload.error
                }
            }
        case "SET_ERRORS":
            return {
                bill: {
                    ...state.bill,
                    error: action.payload.billError
                },
                tipPercentage: {
                    ...state.tipPercentage,
                    error: action.payload.tipError
                },
                peopleAmount: {
                    ...state.peopleAmount,
                    error: action.payload.peopleError
                }
            }
        case "SET_INITIAL_STATE":
            return initialInputValuesState
        default:
            throw new Error("action.type didn't matched any of the possible options");
    }
}

export { actionTypes, inputValuesReducer, initialInputValuesState}
