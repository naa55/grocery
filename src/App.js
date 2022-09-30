import Order from './Order';
import Search from './Search';
import { useState } from 'react';


function App() {
  const [task, setTask] = useState([]);

  const addTask = ([a, b, d])=> {
    setTask([...task, {bread:b, day:a, price:d}])
  }
  return (
    <div className="App">
      <Order addTask={addTask}/>
      <Search data={task}/>
      {console.log(task)}
    </div>
  );
}

export default App;
