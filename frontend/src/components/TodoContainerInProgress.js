import classes from "./TodoContainer.module.css";
import Todo from "./Todo";

function TodoContainerInProgress({todos}) {
    return (
        <div className={classes.state}>
            <h1>In Progress</h1>
            {

                todos.map(todo => <Todo key={todo.id} description={todo.description} status={todo.status}/>)
            }
        </div>
    );
}

export default TodoContainerInProgress;