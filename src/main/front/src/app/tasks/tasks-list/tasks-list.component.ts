import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Task} from "../task";
import {TasksService} from "../tasks.service";

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TasksListComponent implements OnInit {
    tasks: Task[] = [];

    constructor(private _tasksService:TasksService) {
    }

    ngOnInit() {
        this._tasksService
            .getTasks()
            .subscribe((data:any[]) => {
                    console.log(data);
                    this.tasks = data
                },
                error => console.log(error));
        this._tasksService.onTaskAdded.subscribe((newTask:Task) => {
            this.tasks.push(newTask)
        })
    }


    getDueDateByLabel(task:Task) {
        return task.completed ? 'badge-success' : 'badge-primary';
    }

    onTaskChange(event, task){
        this._tasksService
            .saveTask(task, event.target.checked)
            .subscribe();
    }

}
