import "./App.css";
import Image from "./header_pic.jpg";
import { ToDoList } from "./toDoList";

function App() {
  return (
    <div>
      <div>
        <ToDoList />
      </div>
      <div  className = "container">
        <img src={Image} width="300px" alt="header_pic" style={{borderRadius: "30%"}}/>
      </div>
    </div>
  );
}

export default App;
