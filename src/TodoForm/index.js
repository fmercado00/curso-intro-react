import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo TODO</label>
            <textarea  
                value ={newTodoValue}
                onChange={onChange}
                placeholder="Give a task"
            />
            <div>
                <button 
                    type="button"
                    onClick={onCancel}>
                    Cancel
                </button>
                <button
                    type="submit">
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };