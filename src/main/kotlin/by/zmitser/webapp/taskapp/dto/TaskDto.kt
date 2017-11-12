package by.zmitser.webapp.taskapp.dto

import com.fasterxml.jackson.annotation.JsonFormat
import org.springframework.data.annotation.Id
import java.time.LocalDate

data class TaskDto(@Id
                   var id: String?,
                   var name: String?,
                   @JsonFormat(pattern = "dd/MM/yyyy")
                   var dueDate: LocalDate?,
                   var completed: Boolean?) {

    constructor() : this(null, null, null, null)
    constructor(name: String?, dueDate: LocalDate?, completed: Boolean?) : this(null, name, dueDate, completed)
}