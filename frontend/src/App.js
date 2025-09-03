import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [refreshFlag, setRefreshFlag] = useState(0);

  const handleTaskAdded = () => {
    // Força o reload da lista de tarefas mudando o valor
    setRefreshFlag(prev => prev + 1);
  };
 return (
    <div className="App">
      <header>
        <h1>✅ Gerenciador de Tarefas</h1>
        <p>Sistema desenvolvido com React e Java Spring Boot</p>
      </header>
      
      <main>
        <TaskForm onTaskAdded={handleTaskAdded} />
        <TaskList refreshFlag={refreshFlag} />
      </main>
    </div>
  );
}

export default App;