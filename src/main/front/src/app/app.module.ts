import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import {TasksAddComponent} from './tasks/tasks-add/tasks-add.component';
import {TasksListComponent} from './tasks/tasks-list/tasks-list.component';
import {TasksService} from "./tasks/tasks.service";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {reducers} from "./reducers/index";
import {INITIAL_APPLICATION_STATE} from "./store/application-state";
import {TasksServiceEffects} from "./effects/tasks-service-effects";
import {EffectsModule} from "@ngrx/effects";


@NgModule({
    declarations: [
        AppComponent,
        TasksComponent,
        TasksAddComponent,
        TasksListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {
            initialState: INITIAL_APPLICATION_STATE
        }),
        EffectsModule.forRoot([
            TasksServiceEffects
        ]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [TasksService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
