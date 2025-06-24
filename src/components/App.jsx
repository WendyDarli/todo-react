import Header from './Header/Header.jsx'
import Wrapper from './Wrapper/Wrapper.jsx'
//import Todo from './Todo/Todo.jsx'
//import Modal from './Create-Delete-Modal/Modal.jsx'
import Todo from './Todo/Todo.jsx'
import { userTasks } from '../data/userTasks.js'
function App() { //root

    return(
      <>
        <Header/>
        <div id='centralizer'>
          <Wrapper/>
          <TodoCard/>
        </div>
      </>      
    );
  //TODO: conditional rendering for list view or kanban view
  
  return(
    <>
      <Header/>
      <div id='centralizer'>
        <MobileWrapper/>
        <Todo userTasks={userTasks}/>
      </div>
    </>
  );

}

export default App
