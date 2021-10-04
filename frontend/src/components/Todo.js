import {useState} from "react";

function Todo() {

    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");

    return (
        <div>
            <h1>{description}</h1>
            <h3>{status}</h3>
        </div>
    );
}

export default Todo;