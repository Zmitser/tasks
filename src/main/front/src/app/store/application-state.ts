import {Task} from "../tasks/task";

export interface ApplicationState {
    tasks: Task[];
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {tasks: []};
