import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "./task";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TasksService {

    constructor(private _http: HttpClient) {
    }

    getTasks():Observable<Task[]> {
        return this._http.get<Task[]>('/api/tasks')
    }

    saveTask(task:Task){
        return this._http.post<Task>('/api/tasks', task)
    }


}
