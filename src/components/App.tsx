import * as React from "react";
import { Button } from "antd";
import { Counter } from "../features/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Hello</Button>
        <Counter />
      </header>
    </div>
  );
}

export default App;
