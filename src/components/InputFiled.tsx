import React from "react";
import "./styles.css";

const InputFiled = () => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Wpisz zadanie..."
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Dodaj
      </button>
    </form>
  );
};

export default InputFiled;
