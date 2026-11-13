import { useState } from "react";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  function calculate() {
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    let answer;

    switch (operator) {
      case "+":
        answer = num1 + num2;
        break;

      case "-":
        answer = num1 - num2;
        break;

      case "*":
        answer = num1 * num2;
        break;

      case "/":
        if (num2 === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        answer = num1 / num2;
        break;

      default:
        answer = "Invalid operator";
    }

    setResult(answer);
  }

  return (
    <div className="calculator">
      <h2>Basic Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
      />

      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      >
        <option value="+">Addition (+)</option>
        <option value="-">Subtraction (-)</option>
        <option value="*">Multiplication (*)</option>
        <option value="/">Division (/)</option>
      </select>

      <input
        type="number"
        placeholder="Enter second number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      />

      <button onClick={calculate}>
        Calculate
      </button>

      {result !== null && (
        <div className="result">
          <h3>Result: {result}</h3>
        </div>
      )}
    </div>
  );
}

export default Calculator;