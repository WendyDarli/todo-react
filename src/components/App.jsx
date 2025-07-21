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
import { useToggleView } from '../hooks/useToggleView.js';
import { useEffect, useRef } from 'react';


function App() { //root
  const { userTasks, setUserTasks, editOrCreateTask, deleteTask } = useUserTasks();
  const { isOpen, modalMode, taskId, openModal, closeModal } = useModalManager();
  const { view, setView, toggleView } = useToggleView();


  const selectedTask = userTasks.find(task => task.id === taskId);
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const previousView = useRef(view);

  //automaticly swich to 'todo' view on mobile and restore previous view on desktop
  useEffect(()=>{
    if(isMobile){
      previousView.current = view;
      setView('todo');
    } else {
      setView(previousView.current);
    }
  }, [isMobile]);

  return(
    <>
      <Header/>
      <div id='centralizer'>
        {isMobile 
          ? <MobileWrapper openModal={() => openModal('create')}/> 
          : <DesktopWrapper openModal={() => openModal('create')} toggleView={toggleView} view={view}/>}

        
        {view === 'todo' && <Todo userTasks={userTasks} openModal={openModal}/>}
        {view === 'kanban' && <KanbanView openModal={openModal} userTasks={userTasks} setUserTasks={setUserTasks}/>}

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
