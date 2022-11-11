import Group from "./Components/Group/Group";
import GroupCard from "./Components/Group/GroupCard";
import "./App.css";
import NewGroup from "./Components/NewGroup/NewGroup.js";
import AddPoints from "./Components/AddPoints/AddPoints";


const App = (props) => {

  const clickHandler = () => {
    console.log("click done!")
  }

  return <div className="App" id="App">
      <h1>Solera Teams Scores</h1>
      <div id="sideButtons">
        <button onClick={clickHandler} id="addGroup" name="Add Group"> Group </button><p></p>
        <button onClick={clickHandler} id="addAssignment" name="Add Assignment"> Assignment </button><p></p>
        <button onClick={clickHandler} id="addAssignment" name="Add Extra Points"> Points </button>
      </div>
      <div className="BigDiv" id="BigDiv">
        <GroupCard name="Group 1" points="100" assignment="2"></GroupCard>
        <GroupCard name="Group 2" points="100" assignment="2"></GroupCard>
        <GroupCard name="Group 3" points="100" assignment="2"></GroupCard>
        <GroupCard name="Group 4" points="100" assignment="2"></GroupCard>
        <NewGroup />
        <AddPoints />
      </div>
  </div>
}

export default App;