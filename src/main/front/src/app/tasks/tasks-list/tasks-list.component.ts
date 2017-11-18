import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Task} from "../task";
import {TasksService} from "../tasks.service";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../store/application-state";
import {Observable} from "rxjs/Observable";
import * as Actions from '../../actions/actions';


@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TasksListComponent implements OnInit{

    tasks$: Observable<Task[]>;

    constructor(private _tasksService:TasksService, private _store:Store<ApplicationState>) {
             this.tasks$ = _store.select('tasks');

    }

    ngOnInit(): void {
        this._store.dispatch(new Actions.LoadTaskAction())
    }

    getDueDateByLabel(task:Task) {
        return task.completed ? 'badge-success' : 'badge-primary';
    }

    onTaskChange(event, task){
        task.completed = event.target.checked;
        this._store.dispatch(new Actions.SaveTaskAction(task))
    }

}
