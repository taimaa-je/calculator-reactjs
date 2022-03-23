import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import InputResultsBar from "./components/InputResultsBar";
import * as math from "mathjs";

const App = () => {
  const [calculation, setCalucaltion] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setCalucaltion((calculation) => [...calculation, val ]);
  };

  const calcResult = () => {
    const calculations = calculation.join(" ");
    if(calculation.length===0)
{console.log('nothing')}
    else
    setResult(math.evaluate(calculations));
  };

  const clearCalc = () => {
    setCalucaltion("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator-card">
        <InputResultsBar calculation={calculation} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calcResult} />
          <Button symbol="-" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="Clear" color="#000000" handleClick={clearCalc} />
        </div>
      </div>
    </div>
  );
};

export default App;
