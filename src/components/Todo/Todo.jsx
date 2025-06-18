import './Todo.css'

function Todo(){
    return(
        <div className='todo-container light-border'>
            <div>
                <p className='todo-name'>Todo name</p>
                <p className='todo-description'>Description</p>
            </div>
            <div>
                <p className='todo-status'>In Progress</p>
            </div>

        </div>
    )
}

export default Todo