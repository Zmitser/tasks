import {ActionReducerMap} from "@ngrx/store";
import {tasksReducer} from "./tasksReducer";
import {ApplicationState} from "../store/application-state";

export const reducers:ActionReducerMap<ApplicationState> = {
    tasks: tasksReducer,
};

