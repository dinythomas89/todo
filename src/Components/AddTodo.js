import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTodo = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const newInput = (e) => {
    setUserInput(e.target.value);
  };

  const addTask = (e) => {
    if (userInput === "") {
      alert("please enter a task");
    } else if (!startDate) {
      alert("please enter deadline");
    } else {
      addTodo(userInput, startDate);
      setUserInput("");
    }
  };

  return (
    <div className="add-item-container">
      <label for="new-todo">Todo description</label>
      <input
        value={userInput}
        id="new-todo"
        type="text"
        onChange={newInput}
        placeholder="Enter new todo..."
      />
      <br />
      <div className="datepicker">
        <label for="datepicker">Deadline</label>
        <DatePicker
          id="datepicker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
          dateFormat="yyyy/MM/dd"
        />
      </div>
      <br />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default AddTodo;
