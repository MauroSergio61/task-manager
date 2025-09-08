import React, { useState, useEffect } from 'react';
import { taskService } from '../services/api';

const TaskList = ({ refreshFlag }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('ALL');

  const loadTasks = async () => {
    try {
      const response = await taskService.getAllTasks();
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
      alert('Erro ao carregar tarefas. Verifique se o backend está rodando.');
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      try {
        await taskService.deleteTask(id);
        loadTasks();
        alert('Tarefa excluída com sucesso!');
      } catch (error) {
        console.error('Erro ao excluir tarefa:', error);
        alert('Erro ao excluir tarefa. Verifique o console.');
      }
    }
  };

  const updateTaskStatus = async (id, newStatus) => {
    try {
      const taskToUpdate = tasks.find(task => task.id === id);
      const updatedTask = {
        ...taskToUpdate,
        status: newStatus
      };
      
      await taskService.updateTask(id, updatedTask);
      loadTasks();
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
      alert('Erro ao atualizar tarefa. Verifique o console.');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const filteredTasks = filter === 'ALL' 
    ? tasks 
    : tasks.filter(task => task.status === filter);

  useEffect(() => {
    loadTasks();
  }, [refreshFlag]);

if (loading) return (
  <div className="loading-container">
    <div className="spinner"></div>
    <p>Carregando tarefas...</p>
  </div>
);

  return (
    <div className="task-list">
      <h2>📋 Minhas Tarefas ({filteredTasks.length})</h2>
      
      {/* Filtro por status */}
      <div className="filter-section">
        <label>Filtrar por status: </label>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="ALL">Todos</option>
          <option value="TODO">A Fazer</option>
          <option value="DOING">Fazendo</option>
          <option value="DONE">Concluído</option>
        </select>
      </div>

      {filteredTasks.length === 0 ? (
        <p>Nenhuma tarefa encontrada. Crie sua primeira tarefa!</p>
      ) : (
        filteredTasks.map(task => (
          <div key={task.id} className={`task-item ${task.status.toLowerCase()}`}>
            <h3>{task.title}</h3>
            <p>Status: {task.status}</p>
            <p>Descrição: {task.description}</p>
            <p>Prazo: {formatDate(task.dueDate)}</p>
            <div className="task-actions">
              <select 
                value={task.status} 
                onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                className="status-select"
              >
                <option value="TODO">A Fazer</option>
                <option value="DOING">Fazendo</option>
                <option value="DONE">Concluído</option>
              </select>
              
              <button onClick={() => deleteTask(task.id)}>
                🗑️ Excluir
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;