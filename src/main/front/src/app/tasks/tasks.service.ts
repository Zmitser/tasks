import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TasksService {

    constructor(private http: HttpClient) {
    }

    getTasks() {
        return this.http.get('/api/tasks')
    }

}
