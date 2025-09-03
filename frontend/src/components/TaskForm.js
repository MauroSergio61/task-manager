import React, { useState } from 'react';
import { taskService } from '../services/api';

const TaskForm = ({ onTaskAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'TODO',
    dueDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await taskService.createTask(formData);
      
      // Limpa o formulário
      setFormData({
        title: '',
        description: '',
        status: 'TODO',
        dueDate: ''
      });
      
      // Atualiza a lista de tarefas
      if (onTaskAdded) {
        onTaskAdded();
      }
      
      alert('Tarefa criada com sucesso!');
      
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      alert('Erro ao criar tarefa. Verifique o console para mais detalhes.');
    }
  };

  return (
    <div className="task-form">
      <h3>➕ Adicionar Nova Tarefa</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Digite o título da tarefa"
          />
        </div>
        
        <div className="form-group">
          <label>Descrição:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Digite a descrição da tarefa"
            rows="3"
          />
        </div>
        
        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="TODO">A Fazer</option>
            <option value="DOING">Fazendo</option>
            <option value="DONE">Concluído</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Data de Vencimento:</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="btn-primary">
          ➕ Adicionar Tarefa
        </button>
      </form>
    </div>
  );
};

export default TaskForm;