import Header from './Header/Header.jsx'
import Wrapper from './Wrapper/Wrapper.jsx'
import Todo from './Todo/Todo.jsx'

function App() { //root

    return(
      <>
        <Header/>
        <div id='centralizer'>
          <Wrapper/>
          <Todo/>
        </div>
      </>      
    );
}

export default App
