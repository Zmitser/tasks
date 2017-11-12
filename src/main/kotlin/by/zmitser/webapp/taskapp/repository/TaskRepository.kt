package by.zmitser.webapp.taskapp.repository

import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import by.zmitser.webapp.taskapp.domains.Task


interface TaskRepository : ReactiveMongoRepository<Task, String>