import React from "react";
import "./App.css";
import InputFiled from "./components/InputFiled";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Zadania</span>
      <InputFiled />
    </div>
  );
};

export default App;
