package by.zmitser.webapp.taskapp.routes

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.MediaType.APPLICATION_JSON
import org.springframework.web.reactive.function.server.router
import by.zmitser.webapp.taskapp.handlers.TaskHandler

@Configuration
open class TaskRouter(private val taskHandler: TaskHandler) {

    @Bean
    open fun apis() = router {
        (accept(APPLICATION_JSON) and "/api/tasks").nest {
            GET("", taskHandler::findAll)
            POST("", taskHandler::save)
        }
    }
}