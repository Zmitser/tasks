// counter.reducer.ts
import * as Actions from '../actions/actions';
import {Task} from "../tasks/task";

export type Action = Actions.Actions;



export function tasksReducer(state:Task[], action: Actions.Actions) {

    switch (action.type) {
        case Actions.LOAD_TASKS_ACTION_SUCCESS:
            return action.payload;
        default:
            return state;
    }

}
