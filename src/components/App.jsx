import Header from './Header/Header.jsx'
import Wrapper from './Wrapper/Wrapper.jsx'
//import Todo from './Todo/Todo.jsx'
//import Modal from './Create-Delete-Modal/Modal.jsx'
import Todo from './Todo/Todo.jsx'
import { userTasks } from '../data/userTasks.js'
import Header from './Header/Header.jsx';
import MobileWrapper from './Wrapper/MobileWrapper.jsx';
import DesktopWrapper from './Wrapper/DesktopWrapper.jsx';
import Modal from './Create-edit-Modal/Modal.jsx';
import Todo from './Todo/Todo.jsx';
import { userTasks } from '../data/userTasks.js';

import { useMediaQuery } from 'react-responsive';
import { useToggleModal } from '../hooks/useToggleModal.js';

function App() { //root
  const {isOpen, openModal, closeModal } = useToggleModal();
  //TODO: conditional rendering for list view or kanban view
  
  return(
    <>
      <Header/>
      <div id='centralizer'>
        {useMediaQuery({ maxWidth: 800 }) ? <MobileWrapper/> : <DesktopWrapper openModal={openModal}/>}
        <Todo userTasks={userTasks}/>
        {isOpen && <Modal closeModal={closeModal}/>}
      </div>
    </>
  );

}

export default App;
