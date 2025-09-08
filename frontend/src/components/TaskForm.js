import React, { useState } from 'react';
import { taskService } from '../services/api';

const TaskForm = ({ onTaskAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'TODO',
    dueDate: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Título é obrigatório';
    } else if (formData.title.length < 3) {
      newErrors.title = 'Título deve ter pelo menos 3 caracteres';
    }
    
    if (!formData.dueDate) {
      newErrors.dueDate = 'Data de vencimento é obrigatória';
    } else {
      const selectedDate = new Date(formData.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.dueDate = 'Data não pode ser no passado';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpa erro do campo quando usuário começa a digitar
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await taskService.createTask(formData);
      
      setFormData({
        title: '',
        description: '',
        status: 'TODO',
        dueDate: ''
      });
      
      setErrors({});
      
      if (onTaskAdded) {
        onTaskAdded();
      }
      
      alert('Tarefa criada com sucesso!');
      
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      alert('Erro ao criar tarefa. Verifique o console.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="task-form">
      <h3>➕ Adicionar Nova Tarefa</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título: *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Digite o título da tarefa"
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-text">{errors.title}</span>}
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
          <label>Data de Vencimento: *</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className={errors.dueDate ? 'error' : ''}
          />
          {errors.dueDate && <span className="error-text">{errors.dueDate}</span>}
        </div>
        
        <button 
          type="submit" 
          className="btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? '⏳ Adicionando...' : '➕ Adicionar Tarefa'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;