import logo from './logo.svg';
import './App.css';
import Demo from './Components/Demo';
import Demo1 from './Components/Demo1';
import Parent from './Components/Parent';
import Sample from './Components/Sample';
import TodoList from './Components/TodoList';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       {/*  <h1>App Component </h1> */}
      {/*   <Demo></Demo>
        <Demo1></Demo1>
        <demo2></demo2>
        <Parent></Parent>
        <Sample></Sample> */}
        <TodoList></TodoList>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       {/*  <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
       {/*  <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
     {/*  </header> */}
    </div>
  );
}

export default App;
