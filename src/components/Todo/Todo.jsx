import './Todo.css'

function Todo(props){
    return(
        <>
        {/*TODO: add conditional rendering for status background color*/}
        {/*TODO: add date p that groups todos inside this due date*/}
        {props.userTasks.map((task) => (
            <div className='todo-container light-border' key={task.id}>
                <div>
                    <p className='todo-name'>{task.todoName}</p>
                    <p className='todo-description'>{task.description}</p>
                </div>
                <div>
                    <p className='todo-status'>{task.status}</p>
                </div>

            </div>
            
        ))}
    </>
    );
}

export default Todo