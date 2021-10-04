import {useState} from "react";

function AddTodo() {

    const [description, setDescription] = useState("");

    const handleAddOneTodo = (event) => {
        const url = '/api/todo';
        const todoToAdd = {description: description, status: "open"};

        fetch(url, {
                method: 'POST',
                body: JSON.stringify(todoToAdd),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    const handleChangeDescription = event => setDescription(event.target.value);

    return (
        <form>
            <input type="text" placeholder="Description of Todo-Task" onChange={handleChangeDescription}/>
            <button onClick={handleAddOneTodo}>Add Todo</button>
        </form>
    );
}

export default AddTodo;