import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Doctor appointment',
      day: '2 Jan 14:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Buy groceries',
      day: '2 Jan 16:00',
      reminder: false,
    },
    {
      id: 3,
      text: 'Visit the music concert',
      day: '4 Jan 19:20',
      reminder: true,
    },
  ]);

  return (
    <div className="App container">
      <Header title="Todo app" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
