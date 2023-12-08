import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 15;

  const addvalue = () => {
    console.log("clicked", counter);

    counter = counter + 1;
    setCounter(counter);
  };
  const rmValue = () => {
    console.log("clicked", counter);

    setCounter(counter - 1);
  };

  return (
    <>
      <h1>coffee or code</h1>
      <h2>Count value : {counter}</h2>

      <button onClick={addvalue}>Add value</button>

      <br />

      <button onClick={rmValue}>Remove value</button>
    </>
  );
}

export default App;
