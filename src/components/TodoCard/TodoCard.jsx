import './TodoCard.css';
import '../Todo/Todo.css';
import { formatDate } from '../../scripts/formatDate';
import { useDraggable } from '@dnd-kit/core';


function DraggableTask({ task, openModal }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <div onClick={() => {openModal('edit', task.id)}} >
      
        <div 
            className='todo-card-container' key={task.id} 
            ref={setNodeRef} 
            {...listeners}
            {...attributes}
            style={style}
        >
            <div className='todo-info'>
                <p className='todo-name'>{task.todoName}</p>
                <p className='todo-description'>{task.description}</p>                
            </div>

            <div className={`priorityTag ${task.priority === 'Low' ? 'green' : task.priority === 'Medium' ? 'yellow' : 'red'}`}>
                <p>{task.priority}</p>
            </div>
            <div className='dateTag'>
                <p>{formatDate(task.dueDate)}</p>
            </div>
        </div>
                
      {task.content}
    </div>
  );
}


function TodoCard({ groupTasksByStatus = [], openModal}){

    return(
        <>

            {(groupTasksByStatus ?? []).map((task) => (
                <DraggableTask key={task.id} task={task} openModal={openModal} />
                
            ))}

        </> 
    );
};

export default TodoCard;