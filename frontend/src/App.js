import AddTodo from "./components/AddTodo";
import TodoContainerOpen from "./components/TodoContainerOpen";
import TodoContainerInProgress from "./components/TodoContainerInProgress";
import TodoContainerDone from "./components/TodoContainerDone";
import classes from "./App.module.css";
import {fetchTodos} from "./service/fetchTodos";
import {useEffect, useState} from "react";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos()
            .then((data) => setTodos(data));
    }, []);

    console.log(todos);

    return (
        <div>
            <div className={classes.boxForThreeStates}>
                    <TodoContainerOpen todos={todos}/>
                    <TodoContainerInProgress todos={todos}/>
                    <TodoContainerDone todos={todos}/>

            </div>
            <AddTodo/>
        </div>
    );
}

export default App;
