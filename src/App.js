import { useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState(0);
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");

  const handleAdd = () => {
    setResult(numberOne + numberTwo);
    console.log(result);

    setNumberOne("");
    setNumberTwo("");
  };
  const handleSubtract = () => {
    setResult(numberOne - numberTwo);
    setNumberOne("");
    setNumberTwo("");
  };
  const handleMultiply = () => {
    setResult(numberOne * numberTwo);
    setNumberOne("");
    setNumberTwo("");
  };
  const handleDivide = () => {
    setResult(numberOne / numberTwo);
    setNumberOne("");
    setNumberTwo("");
  };

  const handleClear = () => {
    setResult(0);
  };

  return (
    <div className="App">
      <label htmlFor="number">
        Number 1:
        <input
          type="text"
          placeholder="Enter the first number.. "
          value={numberOne}
          onChange={(e) => setNumberOne(Number(e.target.value))}
        />
      </label>
      <br />
      <br />
      <label htmlFor="number">
        Number 2:
        <input
          type="text"
          placeholder="Enter second number.. "
          value={numberTwo}
          onChange={(e) => setNumberTwo(Number(e.target.value))}
        />
      </label>
      <br />
      <br />
      <div className="buttons">
        <button onClick={handleAdd}>Add </button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
        <br />
        <button onClick={handleClear}>Clear the Result</button>
      </div>

      <h1>Result : {result}</h1>
    </div>
  );
}
