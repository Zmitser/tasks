package by.zmitser.webapp.taskapp.services


import by.zmitser.webapp.taskapp.domains.Task
import by.zmitser.webapp.taskapp.dto.TaskDto
import by.zmitser.webapp.taskapp.repository.TaskRepository
import org.modelmapper.ModelMapper
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class TaskServiceImpl(private val taskRepository: TaskRepository,  private val modelMapper: ModelMapper) : TaskService {


    override fun save(taskDto: TaskDto): Mono<TaskDto> {
        val task:Task = modelMapper.map(taskDto, Task::class.java)
        return taskRepository.save(task).map { modelMapper.map(it, TaskDto::class.java) }
    }



    override fun findAll(): Flux<TaskDto>  {
        return taskRepository.findAll().map { modelMapper.map(it, TaskDto::class.java) }
    }

}