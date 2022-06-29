import React from 'react';
import Todo from './TodoItem';


const TodoList = ({ todoList, deleteTodo, editTodo }) => {
    return (
        <ul className="list-container">
            {todoList.map(todo => {
                return (
                    <li key={todo.id} className="list-item">
                        <Todo todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
                    </li>
                )
            })}
        </ul>
    );
};

export default TodoList;