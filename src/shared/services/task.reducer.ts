import { createReducer, createSelector, on, Action } from '@ngrx/store';
import { addTask, getTask, deleteTask, updateTask, markTaskAsComplete, unmarkTaskAsComplete, getTaskById } from './task.actions';
import { Task } from '../interfaces/task.interface';
import { state } from '@angular/animations';


const initialState: Task[] = [
    {
        "id": 1,
        "title": "Lavar a louça.",
        "description": "A louça está suja na pia, vai lavar logo.",
        "completed": false
    },
    {
        "id": 2,
        "title": "Fazer a feira.",
        "description": "Estão faltando coisas na casa, e os meus amigos vem pra cá em breve. Lembrar de comprar cerveja.",
        "completed": true
    },
    {
        "id": 3,
        "title": "Limpar a casa.",
        "description": "A casa precisa ser limpa.",
        "completed": false
    },

]

const getNewTaskId = (state: Task[]) => {
    const itemForSort = [...state]
    itemForSort.sort((a, b) => b.id - a.id);
    const newTaskId = itemForSort[0].id + 1;   

    return newTaskId
}

export const taskReducer = createReducer<Task[]>(
    initialState,
    on(getTask, (state, { tasks }) => [...tasks]),
    on(getTaskById, (state, { id }) =>
        state.filter(task =>
            task.id === id)
    ),
    on(addTask, (state, { task }) =>{
        return [...state, {...task, id : getNewTaskId(state)}]
    } ),

    on(deleteTask, (state, { id }) =>
        state.filter((task) => task.id !== id)
    ),

    on(updateTask, (state, { task }) => (
        state.map((t) => t.id === task.id ? task : t)
    )),
    on(markTaskAsComplete, (state, { id }) =>
        state.map(task =>
            task.id === id ? { ...task, completed: true } : task
        )
    ),
    on(unmarkTaskAsComplete, (state, { id }) =>
        state.map(task =>
            task.id === id ? { ...task, completed: false } : task
        )
    ),

)



