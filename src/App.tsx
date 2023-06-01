import { useState } from "react";
import Countdown from "./components/Countdown";
import Todo from "./components/Todo/Todo";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>计数器</h1>
      <button onClick={() => setCount((count) => count + 2)}>
        count is {count}
      </button>
      <Countdown />
      <Todo />
    </div>
  );
}

export default App;
