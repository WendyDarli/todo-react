import React from 'react';
import './Todo.css'
import { format, isToday, isTomorrow, isYesterday, parseISO } from 'date-fns';

function Todo({ userTasks, openModal }){

    //groups tasks by date in desc order
    const groupedTasks = Object.entries(
        userTasks.reduce((acc, task) => {
            const date = task.dueDate;

            if(!acc[date]){
                acc[date] = [];
            };

            acc[date].push(task);
            return acc;
        }, {})
    ).sort(([a], [b]) => new Date(b) - new Date(a))
    

    //format date to display in the UI
    function formatDate(dateString) {
        const date = parseISO(dateString); 

        if (isToday(date)) return 'Today';
        if (isTomorrow(date)) return 'Tomorrow';
        if (isYesterday(date)) return 'Yesterday';

        return format(date, 'MMM d');
    }


    return(
        <>
            {groupedTasks.map(([dueDate, tasks]) => (
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