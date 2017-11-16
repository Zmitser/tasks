import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "./task";

@Injectable()
export class TasksService {

    onTaskAdded = new EventEmitter<Task>()
    constructor(private _http: HttpClient) {
    }

    getTasks() {
        return this._http.get('/api/tasks')
    }

    saveTask(task:Task, checked:boolean){
        task.completed = checked;
        return this._http.post('/api/tasks', task)
    }

    addTask(task:Task){
        return this._http.post('/api/tasks', task)
    }

}
