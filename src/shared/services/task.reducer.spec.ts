import { taskReducer } from './task.reducer';
import {
    getTask,
    addTask,
    updateTask,
    deleteTask,
    markTaskAsComplete,
    unmarkTaskAsComplete
} from './task.actions';
import { Task } from '../interfaces/task.interface';

const completedInitialState: Task[] = [
    {
        id: 1,
        title: 'Test',
        description: 'Description',
        completed: true
    }
];

const uncompletedInitialState: Task[] = [
    {
        id: 1,
        title: 'Test',
        description: 'Description',
        completed: false
    }
];



describe('ShowsReducer', () => {
    describe('unknown action', () => {
        it('should return the default state', () => {

            const action = {
                type: 'Unknown'
            };
            const state = taskReducer(completedInitialState, action);

            expect(state).toBe(completedInitialState);
        });
    });

    describe('getTask action', () => {
        it('should update the state in an immutable way', () => {

            const newState: Task[] = [
                {
                    id: 1,
                    title: 'Test',
                    description: 'Description',
                    completed: false
                }
            ];
            const action = getTask(newState);
            const state = taskReducer(completedInitialState, action);

            expect(state).toEqual(newState);
            expect(state).not.toBe(newState);
        });
    });


    describe('addTask action', () => {
        it('should update the state in an immutable way', () => {

            const newTask: Task =
            {
                id: 1,
                title: 'Test',
                description: 'Description',
                completed: false
            };

            const action = getTask(completedInitialState);
            const currentState = taskReducer(completedInitialState, action);


            const addAction = addTask(newTask);
            const newState = taskReducer(completedInitialState, addAction);
            expect(newState.length).toBeGreaterThan(currentState.length)

        });
    });


    describe('updateTask action', () => {
        it('should update the state in an immutable way', () => {

            const updatedTask: Task = { ...completedInitialState[0], title: 'Updated Task', description: 'This task has been updated.' };

            const action = updateTask(updatedTask);
            const state = taskReducer(completedInitialState, action);

            expect(state).not.toBe(completedInitialState);

        })
    });


    describe('markTaskAsComplete action', () => {
        it('should update the state in an immutable way', () => {

            const testId = 1

            const action = markTaskAsComplete(testId);
            const state = taskReducer(uncompletedInitialState, action);

            expect(state[0].completed).toEqual(true);
        })
    });

    it('should not update the state when showId does not exist', () => {

        const testId = 2

        const action = markTaskAsComplete(testId);
        const state = taskReducer(uncompletedInitialState, action);

        expect(state[0].completed).toEqual(false);
    });
});

describe('unmarkTaskAsComplete action', () => {
    it('should update the state in an immutable way', () => {

        const testId = 1
        const action = unmarkTaskAsComplete(testId);
        const state = taskReducer(completedInitialState, action);

        expect(state[0].completed).toEqual(false);
    });

    it('should not update the state when showId does not exist', () => {

        const testId = 2
        const action = unmarkTaskAsComplete(testId);
        const state = taskReducer(completedInitialState, action);

        expect(state[0].completed).toEqual(true);

    });
});



describe('deleteTask action', () => {
    it('should update the state in an immutable way', () => {

        const action = deleteTask(1);
        const state = taskReducer(completedInitialState, action);

        expect(state.length).toEqual(0);
    });

    it('should not update the state when showId does not exist', () => {

        const action = deleteTask(2);
        const state = taskReducer(completedInitialState, action);

        expect(state.length).toEqual(1);
    });
});

