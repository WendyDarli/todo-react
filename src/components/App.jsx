import Header from './Header/Header.jsx'
import Wrapper from './Wrapper/Wrapper.jsx'
//import Todo from './Todo/Todo.jsx'
import Modal from './Create-Delete-Modal/Modal.jsx'
function App() { //root

    return(
      <>
        <Header/>
        <div id='centralizer'>
          <Wrapper/>
          <Modal/>
        </div>
      </>      
    );
}

export default App
