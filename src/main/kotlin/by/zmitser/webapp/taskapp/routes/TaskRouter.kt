package by.zmitser.webapp.taskapp.routes

import by.zmitser.webapp.taskapp.handlers.TaskHandler
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.ClassPathResource
import org.springframework.http.MediaType.APPLICATION_JSON
import org.springframework.web.reactive.function.server.RouterFunctions.resources
import org.springframework.web.reactive.function.server.router


@Configuration
open class TaskRouter(private val taskHandler: TaskHandler) {

    var router = resources("/**", ClassPathResource("public/"))

    @Bean
    open fun apis() = router {
        (accept(APPLICATION_JSON) and "/api/tasks").nest {
            GET("", taskHandler::findAll)
            POST("", taskHandler::save)
        }
    }
}