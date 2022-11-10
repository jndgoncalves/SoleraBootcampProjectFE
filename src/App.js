import Group from "./Components/Group/Group";
import "./App.css";

const App = (props) => {
  
  const clickHandler = () => {
    console.log("click done!")
  }

  return <div className="App">
      <h1>Solera Teams</h1>
      <div className="BigDiv">
          <button onClick={clickHandler}>
            <Group name="Group 1" points="15" assignment="2"/>
          </button>
      </div>
  </div>
}

export default App;
