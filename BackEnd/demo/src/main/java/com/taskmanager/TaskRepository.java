package com.taskmanager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    // Métodos customizados podem ser adicionados aqui
    List<Task> findByStatus(String status);
    List<Task> findByTitleContainingIgnoreCase(String title);
}