import { useState } from "react";
import "./App.css";

function App() {
  const [bmi, setbmi] = useState(null);
  const [height, setheight] = useState(0);
  const [weight, setweight] = useState(0);

  function addbmi() {
    setbmi(weight / height);
    console.log(bmi);
  }
  function handleWeight(e) {
    setweight(e.target.value);
  }

  function handleHeight(e) {
    setheight(e.target.value);
    console.log(height);
  }

  return (
    <div className="outerbox">
      <h1 className="h1">BMI CALCULATOR</h1>
      <img
        className="image"
        src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?cs=srgb&dl=pexels-jane-doan-1092730.jpg&fm=jpg"
      ></img>
      <div className="innerbox">
        <input
          type="number"
          className="log"
          onChange={handleWeight}
          placeholder="weight"
        />
        <br />
        <input
          type="number"
          className="log"
          onChange={handleHeight}
          placeholder="height"
        />
        <br />
        <button onClick={addbmi}>bmi calculate</button>
        <p>bmi={bmi}</p>
      </div>
    </div>
  );
}

export default App;
