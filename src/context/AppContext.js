import React, {createContext, useContext} from "react";
import useAppState from "../hooks/useAppState/useAppState";

const AppContext = createContext({});

export function AppProvider(props) {
    const initialState = useAppState();

    return (
        <AppContext.Provider value={initialState}>
            {props.children}
        </AppContext.Provider>
    )
}

export function useAppProvider() {
    const ctx = useContext(AppContext);

    if (!ctx) throw new Error("useAppProvider should be used inside AppProvider")

    return ctx;
}

export default AppContext;
