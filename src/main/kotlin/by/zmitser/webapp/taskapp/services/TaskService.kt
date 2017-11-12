package by.zmitser.webapp.taskapp.services

import by.zmitser.webapp.taskapp.domains.Task
import by.zmitser.webapp.taskapp.dto.TaskDto
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

interface TaskService {

    fun findAll():Flux<TaskDto>
    fun save(taskDto:Task):Mono<Task>
}