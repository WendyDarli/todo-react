import Header from './Header/Header.jsx';
import MobileWrapper from './Wrapper/MobileWrapper.jsx';
import DesktopWrapper from './Wrapper/DesktopWrapper.jsx';
import Modal from './Create-edit-Modal/Modal.jsx';
import Todo from './Todo/Todo.jsx';
import { userTasks } from '../data/userTasks.js';

import { useMediaQuery } from 'react-responsive';
import { useModalManager } from '../hooks/useModalManager.js';

function App() { //root
  const {isOpen, modalMode, taskId, openModal, closeModal } = useModalManager();
  const selectedTask = userTasks.find(task => task.id === taskId);
  const isMobile = useMediaQuery({ maxWidth: 800 });
  //TODO: conditional rendering for list view or kanban view
  
  return(
    <>
      <Header/>
      <div id='centralizer'>
        {isMobile 
          ? <MobileWrapper/> 
          : <DesktopWrapper openModal={() => openModal('create')}/>}
        <Todo userTasks={userTasks} openModal={openModal}/>
        {isOpen && <Modal 
          mode={modalMode} 
          task={selectedTask} 
          closeModal={closeModal}/>}
      </div>
    </>
  );

}

export default App;
