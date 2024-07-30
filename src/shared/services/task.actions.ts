import { createAction } from "@ngrx/store";
import { Task } from "../interfaces/task.interface";

export const getTask = createAction(
    '[Task] Get Tasks',
    (tasks: Task[]) => ({
        tasks
    }))

export const getTaskById = createAction(
    '[Task] Get Task By Id',
    (id: number) => ({
        id
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

export const markTaskAsComplete = createAction(
    '[All Shows] Mark Task as Completed',
    (id: number) => ({
        id
    }));

export const unmarkTaskAsComplete = createAction(
    '[All Shows] Unmark Task as Completed',
    (id: number) => ({
        id
    }));