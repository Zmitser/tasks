// counter.actions.ts
import {Action} from '@ngrx/store';
import {Task} from "../tasks/task";

export const LOAD_TASKS_ACTION = 'LOAD_TASKS_ACTION';
export const LOAD_TASKS_ACTION_SUCCESS = 'LOAD_TASKS_ACTION_SUCCESS';
export const SAVE_TASK = 'SAVE_NEW_TASK';
export const SAVE_TASK_SUCCESS = 'SAVE_TASK_SUCCESS';

export class LoadTaskAction implements Action {
    readonly type = LOAD_TASKS_ACTION;
}


export class LoadTaskActionSuccess implements Action {
    readonly type = LOAD_TASKS_ACTION_SUCCESS;

    constructor(public payload: Task[]) {

    }
}

export class SaveTaskAction  implements Action {

    type: string = SAVE_TASK;

    constructor(public payload: Task){

    }

}
export class SaveTaskActionSuccess  implements Action {

    type: string = SAVE_TASK_SUCCESS;

    constructor(public payload: Task){

    }

}


export type Actions =
     LoadTaskActionSuccess
