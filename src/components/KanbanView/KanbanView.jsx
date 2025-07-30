import './KanbanView.css';
import TodoCard from '../TodoCard/TodoCard';
import { DndContext, useDroppable, PointerSensor, useSensor, useSensors  } from '@dnd-kit/core';
import filteredTasks from '../../utils/filterTasks';

function KanbanColumn({ id, colorClass, title, tasks, openModal }) {
  const { setNodeRef } = useDroppable({ id }); 

  return (
    <div className="kanban-column" ref={setNodeRef} id={id}>
      <p className={`kanban-header ${colorClass}`}>{title}</p>
      <TodoCard openModal={openModal} groupTasksByStatus={tasks} />
    </div>
  );
}

function KanbanView({ userTasks, openModal, setUserTasks, priority, status }) {

  //allow user to click or drag by setting a delay that defines the event
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 150,     
        tolerance: 200, 
      },
    })
  );

  function handleDragEvent(event){
      const {active, over} = event;
      if(!over) return; //if we are not over something dropable exit the function

      if (active.id !== over.id) {
          setUserTasks(prevTasks =>
              prevTasks.map(task =>
                  task.id === active.id
                      ? { ...task, status: over.id }
                      : task
              )
          );
      };
  }

  const groupTasksByStatus = (filteredTasks(userTasks, priority, status) ?? []).reduce((acc, task) => {
    const status = task.status;
    if (!acc[status]) acc[status] = [];
    acc[status].push(task);
    return acc;
  }, {});

  return (
    <div id="kanban-container">
      <DndContext onDragEnd={handleDragEvent} sensors={sensors}>
        <KanbanColumn id="To-Do" colorClass="red"
          title="To-Do" tasks={groupTasksByStatus['To-Do']}
          openModal={openModal}
          
        />
        <KanbanColumn id="In-Progress" colorClass="yellow"
          title="In Progress" tasks={groupTasksByStatus['In-Progress']}
          openModal={openModal}
        />
        <KanbanColumn id="Done" colorClass="green"
          title="Done" tasks={groupTasksByStatus['Done']}
          openModal={openModal}
        />
      </DndContext>
    </div>
  );
}

export default KanbanView;
