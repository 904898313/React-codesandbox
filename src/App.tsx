import Countdown from "./components/Countdown";
import UseState from "./components/useState";
import Todo from "./components/Todo/Todo";
import Echarts from "./components/echarts/index";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Countdown />
      <Todo />
      <UseState />
      <Echarts />
    </div>
  );
}

export default App;
