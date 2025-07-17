import './KanbanView.css';
import TodoCard from '../TodoCard/TodoCard'


function KanbanView({ userTasks, openModal }){

    const groupTasksByStatus = (userTasks ?? []).reduce((acc, task) => {
        const status = task.status;

        if(!acc[status]){
            acc[status] = [];
        }
        acc[status].push(task);
        return acc;
    },{})

    return(
        <>
            <div id='kanban-container'>
                <div className='kanban-column'>
                    <p className='kanban-header red'>To-Do</p>
                    <TodoCard openModal={openModal} groupTasksByStatus={groupTasksByStatus['To-Do']}/>
                </div>
                
                <div className='kanban-column'>
                    <p className='kanban-header yellow'>In Progress</p>
                    <TodoCard openModal={openModal} groupTasksByStatus={groupTasksByStatus['In-Progress']}/>
                </div>
                <div className='kanban-column'>
                    <p className='kanban-header green'>Done</p>
                     <TodoCard openModal={openModal} groupTasksByStatus={groupTasksByStatus['Done']}/>
                </div>                
            </div>
        </>

    )
}

export default KanbanView