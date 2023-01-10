import './App.css';
import AddTask from './Components/AddTask';
import ListTasks from './Components/ListTasks';

function App() {
  return (
    <div>
      <h1>TODO LIST</h1>
      <ListTasks/>
      <br/>
      <AddTask/>
    </div>
  );
}

export default App;
