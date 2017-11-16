import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Task} from "../task";
import * as moment from "moment";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksAddComponent implements OnInit {

    addedTaskValue = '';

  constructor(private _tasksService:TasksService ) { }

  ngOnInit() {
  }

  onTaskAdd(event){

    let  task:Task = new Task(event.target.value, false, moment().format('DD/MM/YYYY'));
    this._tasksService.addTask(task).subscribe((newTask:Task) => {
        event.target.value = '';
        this._tasksService.onTaskAdded.emit(newTask);
    });
  }

}
