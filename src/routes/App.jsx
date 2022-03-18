import "../styles/App.css";
import React from "react";
import TipCalculator from "../components/TipCalculator/index";
import { AppProvider } from "../context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <TipCalculator />
    </AppProvider>
  );
}

export default App;
