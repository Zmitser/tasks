package by.zmitser.webapp.taskapp

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.KotlinModule
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
open class TaskAppApplication

fun main(args: Array<String>) {
    runApplication<TaskAppApplication>(*args)
}

