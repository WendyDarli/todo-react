import './TodoCard.css';
import '../Todo/Todo.css';
import { formatDate } from '../../scripts/formatDate';


function TodoCard({ groupTasksByStatus, openModal }){



    return(
        <>

            {(groupTasksByStatus ?? []).map((task) => (
            
                <div className='todo-card-container' key={task.id} onClick={() => {openModal('edit', task.id)}}>
                    <div className='todo-info'>
                        <p className='todo-name'>{task.todoName}</p>
                        <p className='todo-description'>{task.description}</p>                
                    </div>

                    <div className={`statusTag ${task.status === 'Done' ? 'green' : task.status === 'In-Progress' ? 'yellow' : 'red'}`}>
                        <p>{task.status}</p>
                    </div>
                    <div className='dateTag'>
                        <p>{formatDate(task.dueDate)}</p>
                    </div>
                </div>
            ))}


        </> 
    )
};

export default TodoCard;