import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [background, setBackground] = useState("red");
  const color = background === "red" ? "blue" : "red";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button
        style={{ backgroundColor: background }}
        onClick={() => setBackground("blue")}
      >
        change to {color}
      </button>
    </div>
  );
}

export default App;
