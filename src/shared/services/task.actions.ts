import { createAction } from "@ngrx/store";
import { Task } from "../models/task.model";

export const getTask = createAction(
    '[Task] Get Tasks',
    (tasks: Task[]) => ({
        tasks
    }))

export const addTask = createAction(
    '[Task] Add Task',
    (task: Task) => ({
        task
    }))


export const deleteTask = createAction(
    '[Task] Delete task',
    (id: number) => ({
        id
    })
);

export const updateTask = createAction(
    '[Task] Update task',
    (task: Task) => ({
        task
    })
);