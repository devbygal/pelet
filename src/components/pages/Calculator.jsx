import React, { useState } from "react";
import "./style/Calculator.css";

export const Calculator = (props) => {
  const [result, setResult] = useState("")
  // const [text, setText] = useState("")

  const calcText = (e) => {
    setResult(e.target.value)
  }
  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0, -1));
  }
  const calculate = () => {
    setResult(eval(result).toString());
  }
  const aski = () => {
    setResult(result.charCodeAt(0))
  }
  const toChar = () => {
    setResult(String.fromCharCode(result))
  }

  return (
    <div className="CalcContainer">

      <h1 className="header"> מחשבון תכנותי </h1>
      <form>
        <input className="calcText" type="text" value={result} onChange={calcText}></input>
      </form>
      <div className="keypad">
        <button onClick={clear} className="highlight" id="clear">
          נקה
        </button>
        <button onClick={backspace} className="highlight">
          מחק
        </button>
        <button name="/" onClick={handleClick} className="highlight">
          &divide;
        </button>
        <button name="7" onClick={handleClick} className="btnCalc">
          7
        </button>
        <button name="8" onClick={handleClick} className="btnCalc">
          8
        </button>
        <button name="9" onClick={handleClick} className="btnCalc">
          9
        </button>
        <button name="*" onClick={handleClick} className="highlight">
          &times;
        </button>
        <button name="4" onClick={handleClick} className="btnCalc">
          4
        </button>
        <button name="5" onClick={handleClick} className="btnCalc">
          5
        </button>
        <button name="6" onClick={handleClick} className="btnCalc">
          6
        </button>
        <button name="-" onClick={handleClick} className="highlight">
          &ndash;
        </button>
        <button name="1" onClick={handleClick} className="btnCalc">
          1
        </button>
        <button name="2" onClick={handleClick} className="btnCalc">
          2
        </button>
        <button name="3" onClick={handleClick} className="btnCalc">
          3
        </button>
        <button name="+" onClick={handleClick} className="highlight">
          +
        </button>
        <button name="0" onClick={handleClick} className="btnCalc">
          0
        </button>

        <button name="." onClick={handleClick} className="btnCalc">
          .
        </button>

        <button name="%" onClick={handleClick} className="programming">
          מודולו
        </button>
        <button onClick={calculate} className="highlight">
          =
        </button>
        <button name="aski" onClick={aski} className="programming">
          המרה לאסקי
        </button>
        <button name="char" onClick={toChar} className="programming">
          המרה לתו
        </button>
        <button name="%" onClick={handleClick} className="programming">
          טרם
        </button>
        <button name="%" onClick={handleClick} className="programming">
          טרם
        </button>
      </div>
    </div>

  );
}
