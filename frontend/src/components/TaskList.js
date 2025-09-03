import React, { useState, useEffect } from 'react';
import { taskService } from '../services/api';


const TaskList = ({ refreshFlag }) => {  // ← Mude o prop name para refreshFlag
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, [refreshFlag]); 

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


  if (loading) return <div>Carregando tarefas...</div>;

  return (
    <div className="task-list">
      <h2>📋 Minhas Tarefas ({tasks.length})</h2>
      
      {tasks.length === 0 ? (
        <p>Nenhuma tarefa encontrada. Crie sua primeira tarefa!</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className={`task-item ${task.status.toLowerCase()}`}>
            <h3>{task.title}</h3>
            <p>Status: {task.status}</p>
            <p>Descrição: {task.description}</p>
            <p>Prazo: {task.dueDate}</p>
            <div className="task-actions">
              <button>✅ Concluir</button>
              <button>✏️ Editar</button>
              <button>🗑️ Excluir</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
const deleteTask = async (id) => {
  if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
    try {
      await taskService.deleteTask(id);
      loadTasks(); // Recarrega a lista
      alert('Tarefa excluída com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    }
  }
};
<button onClick={() => deleteTask(task.id)}>🗑️ Excluir</button>

// Adicione para marcar como concluída:
const updateTaskStatus = async (id, newStatus) => {
  try {
    const taskToUpdate = tasks.find(task => task.id === id);
    await taskService.updateTask(id, { ...taskToUpdate, status: newStatus });
    loadTasks();
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
  }
};

// Botão para concluir:
<button onClick={() => updateTaskStatus(task.id, 'DONE')}>
  ✅ Concluir
</button>

export default TaskList;