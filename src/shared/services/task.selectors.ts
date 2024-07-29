import { createSelector } from "@ngrx/store";
import { AppState } from '../interfaces/task.interface';

export const taskSelector = createSelector(
    (state: AppState) => state.tasks,
    (tasks) => tasks
  );