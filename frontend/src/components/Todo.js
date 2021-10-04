import classes from './Todo.module.css'

function Todo(todo) {


    console.log("In Todo: "+ todo)
    if(todo===undefined) return <div> Fehler </div>;


    return (
        <div className={classes.card}>
            <h4>{todo.description}</h4>
            <h5>{todo.status}</h5>

        </div>
    );
}

export default Todo;