import axios from 'axios';

let API_BASE_URL = 'http://localhost:8080/api';

// Detecta se o backend está respondendo
export const checkBackendConnection = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tasks`);
    console.log('✅ Backend conectado com sucesso!');
    return true;
  } catch (error) {
    console.warn('⚠️  Backend não encontrado. Verifique se está rodando na porta 8080');
    console.warn('💡 Dica: Execute "./mvnw spring-boot:run" no diretório backend');
    return false;
  }
};

export const taskService = {
  getAllTasks: () => axios.get(`${API_BASE_URL}/tasks`),
  getTask: (id) => axios.get(`${API_BASE_URL}/tasks/${id}`),
  createTask: (task) => axios.post(`${API_BASE_URL}/tasks`, task),
  updateTask: (id, task) => axios.put(`${API_BASE_URL}/tasks/${id}`, task),
  deleteTask: (id) => axios.delete(`${API_BASE_URL}/tasks/${id}`),
  checkConnection: checkBackendConnection
};

// Testa a conexão automaticamente
checkBackendConnection();