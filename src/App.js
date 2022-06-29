import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import SetTimer from './Components/SetTimer';
import TodoList from "./Components/TodoList";
import AddTodo from './Components/AddTodo';

function App() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw")
            .then(res => res.json())
            .then(
                (result) => {
                    setTodoList(result);
                },
            )
    }, [])

    const addTodo = (userInput, startDate) => {
        setTodoList([...todoList, {
            id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
            description: userInput,
            deadline: startDate.toISOString().substring(0, 10)
        }]);
    }

    const deleteTodo = (id) => {
        const newTodoList = todoList.filter((task) => task.id !== id);
        setTodoList(newTodoList);
    }

    const editTodo = (id, newDescription) => {
        const editedTodoList = todoList.map((task) => {
            if (task.id === id) {
                return { ...task, description: newDescription }
            } else
                return task;
        });
        setTodoList(editedTodoList);
    }

    return (
        <div className="container">
            <Header />
            <SetTimer />
            <AddTodo addTodo={addTodo} />
            {todoList.length > 0 ?
                <TodoList todoList={todoList} deleteTodo={deleteTodo} editTodo={editTodo} /> : "No Items"
            }

        </div>
    );
}

export default App;