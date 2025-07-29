import React from 'react';
import './Todo.css'
import { formatDate } from '../../utils/formatDate';
import filteredTasks from '../../utils/filterTasks';

function Todo({ userTasks, openModal, priority, status }){

    const groupTasksByDate = Object.entries(
        filteredTasks(userTasks, priority, status).reduce((acc, task) => {
            const date = task.dueDate;

            if(!acc[date]){
                acc[date] = [];
            };

            acc[date].push(task);
            return acc;
        }, {})
    ).sort(([a], [b]) => new Date(b) - new Date(a)); //desc order
    
    return(
        <>
            {groupTasksByDate.map(([dueDate, tasks]) => (
                <React.Fragment key={dueDate}>
                    <p className='p-date'>{formatDate(dueDate)}</p> 
                    {tasks.map((task) => (
                        <div className='todo-container light-border' key={task.id} onClick={() => {openModal('edit', task.id)}}>
                            <div>
                                <p className='todo-name'>{task.todoName}</p>
                                <p className='todo-description'>{task.description}</p>
                            </div>
                            <div >
                                <p className={`todo-status ${ 
                                    task.status === 'To-Do' ? 'red' : 
                                    task.status === 'In-Progress' ? 'yellow' : 
                                    'green'
                                }`}>{task.status}</p>
                            </div>

                        </div>
                    
                    ))}                
                </React.Fragment>  
            ))}
        </>
    );
}

export default Todo;