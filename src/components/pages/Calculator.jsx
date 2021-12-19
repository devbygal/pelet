import React, { useState } from "react";
import "./style/Calculator.css";

export const Calculator = () => {
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
    setResult( window.Function("return " + result)())
  }
  const aski = () => {
    setResult(result.charCodeAt(0))
  }
  const toChar = () => {
    setResult(String.fromCharCode(result))
  }

  const primal = () => {
    if (result === "1") {setResult("false"); return}
    if (result === "2") {setResult("true"); return}

    var limit = Math.ceil(Math.sqrt(result)); //hoisting the loop limit
    console.log(result)
    console.log(limit)
    
    for (let i = 2; i <= limit; i++) {
      if (result % i === 0)
      {
      setResult("false");
      return
      }
    }
    setResult("true");
    console.log(result)
  }

  const isFibonacci = () =>{
    let arr=result.split(',')

  //   if (arr.size() < 3){
  //     return "false";
  // }

  // /** find if the first element is part of the sequence: **/

  // let fib1 = 0;
  // let fib2 = 1;

  // while (fib1 < arr[0]) {
  //   let tmp = fib1 + fib2;
  //     fib1 = fib2;
  //     fib2 = tmp;
  // }

  // if (fib1 !== arr.get(0)) {
  //     // first element is not part of Fibonacci sequence
  //     return "false";
  // }

  // if (fib2 !== arr.get(1)) {
  //    // the first two elements are not part of the Fibonacci sequence
  //    return "false";
  // }

  // /*** now simply verify that the rest of the elements uphold the rule:
  //      each element is the sum of the two previous ones: **/

  // for(let i=2; i < arr.length(); i++) {

  //     // make sure there are no negatives in the array:
  //     if (arr[i] < 0)
  //        return "false";

  //     if (arr[i] !== (arr.get[i-1] + arr[i-1]))
  //        return "false";

  // }

  // //everything checks out okay - return true:
  // return "true";
  let curr = 1
  let  prev = 1;

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  while (curr < element) {
      curr += prev;
      prev = curr-prev;
  }

  if (curr != element) 
  {
    setResult("לא פיבונאצ'י");
    return
  }
  
}
setResult("כן זה פיבונאצ'י!!")
return
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
        <button name="%" onClick={primal} className="programming">
          מס' ראשוני
        </button>
        <button name="%" onClick={isFibonacci} className="programming">
          פיבונאצ'י
        </button>
      </div>
    </div>

  );
}
