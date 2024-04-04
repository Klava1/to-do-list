import { Component } from "react";
import Check from "./check_pic.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class ToDoList extends Component {
  state = {
    userInput: "",
    toDoList: [],
  };

  onChangeEvent(e) {
    this.setState({ userInput: e });
  }

  addItem(input) {
    if (input === "") {
      toast.warning("Enter a task!");
    } else {
      let listArray = this.state.toDoList;
      listArray.push(input);
      this.setState({ toDoList: listArray, userInput: "" });
    }
  }

  deleteList() {
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({ toDoList: listArray });
  }

  crossedWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1 className="container">My To Do List</h1>
        <div className="container">
          <label class="custom-field one">
            <input
              type="text"
              placeholder=""
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.userInput}
            ></input>
            <span class="placeholder">Enter Text</span>
          </label>
        </div>
        <div className="container">
          <button onClick={(e) => this.addItem(this.state.userInput)} className="btn">
            ADD A TASK
          </button>
          <ToastContainer />
        </div>
        <div className="container">
          <ul>
            {this.state.toDoList.map((item, index) => (
              <li onClick={this.crossedWord} key={index}>
                <img src={Check} width="30px" alt="check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="container">
          <button onClick={() => this.deleteList()} className="btn">
            DELETE LIST
          </button>
        </div>
      </form>
    );
  }
}
