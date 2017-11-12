package by.zmitser.webapp.taskapp.config

import by.zmitser.webapp.taskapp.domains.Task
import by.zmitser.webapp.taskapp.repository.TaskRepository
import by.zmitser.webapp.taskapp.services.TaskService
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component
import reactor.core.publisher.toFlux
import java.time.LocalDate
import java.util.*


@Component
class CommandLineAppStartupRunner(private val taskRepository: TaskRepository) : CommandLineRunner {

    override fun run(vararg args: String) {
        taskRepository.deleteAll().thenMany(
                arrayOf(Task("Silence of the Lambdas", LocalDate.now(), false),
                        Task("AEon Flux", LocalDate.now(), false),
                        Task("Enter the Mono<Void>", LocalDate.now(), false),
                        Task("The Fluxxinator", LocalDate.now(), false),
                        Task("Back to the Future", LocalDate.now(), false),
                        Task("Meet the Fluxes", LocalDate.now(), false),
                        Task("Lord of the Fluxes", LocalDate.now(), false)).toFlux()
                        .flatMap { taskRepository.save(it) }).subscribe()
    }
}
