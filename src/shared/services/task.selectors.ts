import { createSelector } from "@ngrx/store";
import { AppState } from '../interfaces/task.interface';

export const taskSelector = createSelector(
    (state: AppState) => state.tasks,
    (tasks) => tasks
  );

  export const selectTaskById = (id: number) =>
    createSelector((state: AppState) => state.tasks, tasks => tasks.find(task => task.id === id));