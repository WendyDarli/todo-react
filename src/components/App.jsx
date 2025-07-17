// COMPONENTS
import Header from './Header/Header.jsx';
import MobileWrapper from './Wrapper/MobileWrapper.jsx';
import DesktopWrapper from './Wrapper/DesktopWrapper.jsx';
import Modal from './Create-edit-Modal/Modal.jsx';
import Todo from './Todo/Todo.jsx';
import KanbanView from './KanbanView/KanbanView.jsx';

// HOOKS
import { useUserTasks } from '../hooks/useUserTasks.js';
import { useMediaQuery } from 'react-responsive';
import { useModalManager } from '../hooks/useModalManager.js';

function App() { //root
  const { userTasks, editOrCreateTask, deleteTask } = useUserTasks();
  const { isOpen, modalMode, taskId, openModal, closeModal } = useModalManager();
  const { view, toggleView } = useToggleView();
  const selectedTask = userTasks.find(task => task.id === taskId);
  const isMobile = useMediaQuery({ maxWidth: 800 });

  
  return(
    <>
      <Header/>
      <div id='centralizer'>
        {isMobile 
          ? <MobileWrapper/> 
          : <DesktopWrapper openModal={() => openModal('create')}/>}
        <Todo userTasks={userTasks} openModal={openModal}/>
        
        {view === 'todo' && <Todo userTasks={userTasks} openModal={openModal}/>}
        {view === 'kanban' && <KanbanView openModal={openModal} userTasks={userTasks}/>}

        {isOpen && <Modal 
          mode={modalMode} 
          task={selectedTask} 
          closeModal={closeModal}
          editOrCreateTask={editOrCreateTask}
          deleteTask={deleteTask}/>}
      </div>
    </>
  );

}

export default App;
