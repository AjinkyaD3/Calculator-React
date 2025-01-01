import  { useState } from "react";

function App() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState("");

  const appendNumber = (number) => {
    if (number === "." && currentOperand.includes(".")) return;
    setCurrentOperand(currentOperand + number);
  };

  const chooseOperation = (op) => {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      const result = evaluate();
      setPreviousOperand(result);
      setCurrentOperand("");
      setOperation(op);
      return;
    }
    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  };

  const evaluate = () => {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return "";

    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return "";
    }
    return computation.toString();
  };

  const handleEquals = () => {
    const result = evaluate();
    if (result === "") return;
    setCurrentOperand(result);
    setPreviousOperand("");
    setOperation("");
  };

  const handleClear = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation("");
  };

  const handleDelete = () => {
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {previousOperand} {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>

        <button className="span-two" onClick={handleClear}>
          AC
        </button>
        <button onClick={handleDelete}>Del</button>
        <button onClick={() => chooseOperation("÷")}>÷</button>
        <button onClick={() => appendNumber("1")}>1</button>
        <button onClick={() => appendNumber("2")}>2</button>
        <button onClick={() => appendNumber("3")}>3</button>
        <button onClick={() => chooseOperation("*")}>*</button>
        <button onClick={() => appendNumber("4")}>4</button>
        <button onClick={() => appendNumber("5")}>5</button>
        <button onClick={() => appendNumber("6")}>6</button>
        <button onClick={() => chooseOperation("+")}>+</button>
        <button onClick={() => appendNumber("7")}>7</button>
        <button onClick={() => appendNumber("8")}>8</button>
        <button onClick={() => appendNumber("9")}>9</button>
        <button onClick={() => chooseOperation("-")}>-</button>
        <button onClick={() => appendNumber(".")}>.</button>
        <button onClick={() => appendNumber("0")}>0</button>
        <button className="span-two" onClick={handleEquals}>
          =
        </button>
      </div>
    </>
  );
}

export default App;
