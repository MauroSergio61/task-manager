# Use uma imagem oficial do Java
FROM openjdk:17-jdk-slim

# Defina o diretório de trabalho
WORKDIR /app

# Copie apenas os arquivos necessários primeiro (para cache eficiente)
COPY pom.xml .
COPY .mvn/ .mvn/
COPY mvnw .
RUN chmod +x mvnw

# Baixe as dependências (cacheável)
RUN ./mvnw dependency:go-offline -B

# Copie o código fonte
COPY src/ src/

# Compile o projeto
RUN ./mvnw clean package -DskipTests

# Exponha a porta
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]
