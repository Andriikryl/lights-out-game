import "./App.css";
import Board from "./components/Board";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <Board size={5} />
    </div>
  );
}

export default App;
