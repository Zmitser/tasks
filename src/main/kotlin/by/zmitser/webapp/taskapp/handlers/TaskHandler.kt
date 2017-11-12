package by.zmitser.webapp.taskapp.handlers

import by.zmitser.webapp.taskapp.domains.Task
import by.zmitser.webapp.taskapp.services.TaskService
import org.springframework.stereotype.Component
import org.springframework.web.reactive.function.server.ServerRequest
import org.springframework.web.reactive.function.server.ServerResponse
import org.springframework.web.reactive.function.server.ServerResponse.ok
import org.springframework.web.reactive.function.server.body
import reactor.core.publisher.Mono

@Component
class TaskHandler(private val taskService: TaskService) {

    fun findAll(req:ServerRequest): Mono<ServerResponse> = ok().body(taskService.findAll())

    fun save(request:ServerRequest):Mono<ServerResponse>  {
        val task:Mono<Task>  = request.bodyToMono(Task::class.java)
        return ok().body(task.flatMap { taskService.save(it) })
    }
}