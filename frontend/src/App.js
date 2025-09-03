import React from 'react';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Task Manager.</h1>
        <p>Sistema de Gerenciamento de Tarefas </p>
      </header>
      <TaskList />
    </div>
  );
}

export default App;