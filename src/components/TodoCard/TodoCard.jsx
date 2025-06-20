import './TodoCard.css'
import '../Todo/Todo.css'

function TodoCard(){

    return(
        <div className='todo-card-container'>
            <div className='todo-info'>
                <p className='todo-name'>Task todo</p>
                <p className='todo-description'>Description</p>                
            </div>

            <div className='statusTag'>
                <p>Medium</p>
            </div>
            <div className='dateTag'>
                <p>Nov 12</p>
            </div>
        </div>
    )
};

export default TodoCard