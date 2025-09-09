🚀 Task Manager - Sistema Fullstack
<div align="center">

Sistema completo de gerenciamento de tarefas com Java Spring Boot backend e React frontend

https://img.shields.io/badge/%F0%9F%8E%A5-Assistir_Demo-FF0000?style=for-the-badge


https://github.com/user-attachments/assets/760d2925-e2f4-476d-be93-cbb83a77d250


</div>
✨ Funcionalidades
🎯 Gerenciamento de Tarefas
✅ Criar novas tarefas com título, descrição e data
✅ Visualizar lista completa de tarefas
✅ Atualizar status (TODO → DOING → DONE)
✅ Excluir tarefas com confirmação

🎨 Interface Intuitiva
🎨 Código de cores por status (Vermelho/Amarelo/Verde)
🔍 Sistema de filtros por status
📱 Design responsivo para mobile e desktop
⚡ Atualização em tempo real
🔧 Funcionalidades Técnicas
🛡️ Validação de formulários em frontend
🔄 Integração REST API completa
📊 Persistência de dados com H2 Database
🚀 Deploy preparado para produção

🛠️ Tecnologias Utilizadas
Backend
Java 17 - Linguagem principal
Spring Boot 3.2 - Framework backend
Spring Data JPA - Persistência de dados
H2 Database - Banco em memória

Maven - Gerenciamento de dependências

Frontend
React 18 - Biblioteca frontend
React Hooks - Gerenciamento de estado
Axios - Cliente HTTP para APIs
CSS3 - Estilização e responsividade
GitHub Pages - Deploy frontend

🚀 Como Executar Localmente

Pré-requisitos
# Java JDK 17+
java -version
# Node.js 18+
node --version
# Maven (opcional)
mvn --version

1. Clone o Repositório
   git clone https://github.com/MauroSergio61/task-manager.git
cd task-manager
2. Execute o Backend
   cd BackEnd/demo
./mvnw spring-boot:run
# Servidor disponível em: http://localhost:8080
3. Execute o Frontend
   cd frontend
npm install
npm start
# Aplicação disponível em: http://localhost:3000
4. Acesse a Aplicação
Abra seu navegador em: http://localhost:3000

📁 Estrutura do Projeto
task-manager/
├── BackEnd/
│   └── demo/
│       ├── src/main/java/com/taskmanager/
│       │   ├── Task.java              # Entidade principal
│       │   ├── TaskRepository.java    # Camada de dados
│       │   ├── TaskController.java    # API REST
│       │   └── DemoApplication.java   # Classe main
│       ├── pom.xml                    # Dependências Maven
│       └── Dockerfile                 # Configuração Docker
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskList.js           # Lista de tarefas
│   │   │   └── TaskForm.js           # Formulário
│   │   ├── services/
│   │   │   └── api.js                # Integração API
│   │   └── App.js                    # Componente principal
│   ├── public/
│   └── package.json
└── README.md

🎯 API Endpoints
Método	Endpoint	Descrição
GET	/api/tasks	Lista todas tarefas
GET	/api/tasks/{id}	Busca tarefa por ID
POST	/api/tasks	Cria nova tarefa
PUT	/api/tasks/{id}	Atualiza tarefa
DELETE	/api/tasks/{id}	Exclui tarefa
GET	/api/tasks/status/{status}	Filtra por status

📸 Screenshots
<div align="center">
<img width="889" height="757" alt="ss2" src="https://github.com/user-attachments/assets/b0754abc-a36f-4b48-8f37-03444fd213aa" />
  Interface principal mostrando tarefas com diferentes status
<img width="889" height="757" alt="ss1" src="https://github.com/user-attachments/assets/c9fe0896-2de0-44d8-bc57-0b4e3785b145" />
Formulário de criação com validações
</div>

🌐 Deploy
Frontend (GitHub Pages)
cd frontend
npm run deploy

Backend (Render/Heroku)
# Configuração automática via Docker
# Disponível em: https://taskmanager-backend.onrender.com

🤝 Contribuição
Contribuições são bem-vindas! Siga os passos:
Fork o projeto
Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
Commit suas mudanças (git commit -m 'Add some AmazingFeature')
Push para a branch (git push origin feature/AmazingFeature)
Abra um Pull Request

<div align="center">
⭐️ Se este projeto te ajudou, deixe uma estrela no GitHub!
https://img.shields.io/github/stars/MauroSergio61/task-manager?style=social
</div>
