import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Task} from "../task";
import * as moment from "moment";
import {TasksService} from "../tasks.service";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../store/application-state";
import {SaveTaskAction} from "../../actions/actions";

@Component({
    selector: 'app-tasks-add',
    templateUrl: './tasks-add.component.html',
    styleUrls: ['./tasks-add.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TasksAddComponent implements OnInit {

    constructor(private _tasksService: TasksService, private _store: Store<ApplicationState>) {
    }

    ngOnInit() {
    }

    onTaskAdd(event) {

        let task: Task = new Task(event.target.value, false, moment().format('DD/MM/YYYY'));
        this._store.dispatch(new SaveTaskAction(task));
        event.target.value = '';
    }

}
