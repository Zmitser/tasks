package by.zmitser.webapp.taskapp.domains

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDate

@Document
data class Task(@Id var id: String?, var name: String?, var dueDate: LocalDate?, var completed: Boolean?) {

    constructor() : this(null, null, null, null)
    constructor(name: String?, dueDate: LocalDate?, completed: Boolean?) : this(null, name, dueDate, completed)
}