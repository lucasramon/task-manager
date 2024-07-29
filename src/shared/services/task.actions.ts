import { createAction } from "@ngrx/store";
import { Task } from "../models/task.model";

export const getTask = createAction('[User] Get Tasks', (tasks:Task[]) => ({
    tasks
}))

export const addTask = createAction('[User] Add Task', (task:Task) => ({
    task
}))