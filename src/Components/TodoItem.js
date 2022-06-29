import React, { useState } from 'react';


const TodoItem = ({ todo, deleteTodo, editTodo }) => {
    const [status, setStatus] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(todo.description);

    const updateButton = () => {
        if (newDescription === "") {
            alert("plese enter the task");
        } else {
            editTodo(todo.id, newDescription);
            setIsEditing(!isEditing);
        }
    };

    const editingTemplate = (
        <div>
            <input
                value={newDescription}
                type="text"
                onChange={(event) => {
                    setNewDescription(event.target.value);
                }}
            />
            <button onClick={updateButton}>
                update
            </button>
        </div>
    );

    const viewTemplate = (
        <div className="view-template-container">
            <div><span className={status ? "todo-strike" : ""}>{todo.description}&nbsp;{todo.deadline}</span></div>
            <input type="checkbox" value={todo.id} onChange={e => setStatus(e.target.checked)} />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        </div>
    );
    return <div>{isEditing ? editingTemplate : viewTemplate}</div>;
}


export default TodoItem;