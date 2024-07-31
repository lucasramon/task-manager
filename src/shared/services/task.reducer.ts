import { createReducer, createSelector, on, Action } from '@ngrx/store';
import { addTask, getTask, deleteTask, updateTask, markTaskAsComplete, unmarkTaskAsComplete, getTaskById } from './task.actions';
import { Task } from '../interfaces/task.interface';
import { state } from '@angular/animations';


const initialState: Task[] = [
    {
        "id": 1,
        "title": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "completed": false
    },
    {
        "id": 2,
        "title": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "completed": true
    },
    {
        "id": 3,
        "title": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
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



