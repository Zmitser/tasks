
import {Injectable} from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import * as AllActions from '../actions/actions';
import {TasksService} from "../tasks/tasks.service";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";

@Injectable()
export class TasksServiceEffects {

    @Effect() tasks$ = this.actions$
        .ofType(AllActions.LOAD_TASKS_ACTION)
        .switchMap(() => this.taskService.getTasks())
        .map(tasks => new AllActions.LoadTaskActionSuccess(tasks));

    @Effect() updatedTasks$ = this.actions$
        .ofType(AllActions.SAVE_TASK)
        .map((value:AllActions.SaveTaskAction) => value.payload)
        .switchMap((task) => this.taskService.saveTask(task))
        .map(resp => new AllActions.SaveTaskActionSuccess(resp))
        .map(resp => new AllActions.LoadTaskAction());



    constructor(private actions$: Actions, private taskService:TasksService) {}
}
