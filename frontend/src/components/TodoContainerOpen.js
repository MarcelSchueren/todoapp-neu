import Todo from "./Todo";
import classes from './TodoContainer.module.css'

function TodoContainerOpen({todos}) {

    return (
        <div className={classes.state}>
            <h1>Open</h1>
            {
                todos.map(todo => <Todo key={todo.id} description={todo.description} status={todo.status}/>)
            }
        </div>
    );
}

export default TodoContainerOpen;