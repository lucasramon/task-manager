import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { taskReducer } from '../shared/services/task.reducer';

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideStore({tasks:taskReducer})]
};
