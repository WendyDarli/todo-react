import './KanbanView.css';
import TodoCard from '../TodoCard/TodoCard'


function KanbanView(){
    return(
        <>
            <div id='kanban-container'>
                <div className='kanban-column'>
                    <p className='kanban-header red'>Todo</p>
                    <TodoCard/>
                </div>
                
                <div className='kanban-column'>
                    <p className='kanban-header yellow'>In Progress</p>
                    <TodoCard/>
                </div>
                <div className='kanban-column'>
                    <p className='kanban-header green'>Done</p>
                    <TodoCard/>
                </div>                
            </div>
        </>

    )
}

export default KanbanView