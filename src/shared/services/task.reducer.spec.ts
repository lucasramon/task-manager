import {taskReducer} from './task.reducer';
import {
  getTask,
  addTask,
  updateTask,
  deleteTask
} from './task.actions';
import { Task } from '../models/task.model';

const  initialState  = [
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
    {
        "id": 4,
        "title": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "completed": true
    },
    {
        "id": 5,
        "title": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "completed": false
    }
];

describe('ShowsReducer', () => {
    describe('unknown action', () => {
      it('should return the default state', () => {

        const action = {
          type: 'Unknown'
        };
        const state = taskReducer(initialState, action);
  
        expect(state).toBe(initialState);
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
          const state = taskReducer(initialState, action);
    
          expect(state).toEqual(newState);
          expect(state).not.toBe(newState);
        });
      });


      describe('updateTask action', () => {
        it('should update the state in an immutable way', () => {
          const initialState: Task[] = [
            {
              id: 1,
              title: 'Test',
              description: 'Description',
              completed: true
            }
          ];

          const updatedTask: Task = { ...initialState[0], title: 'Updated Task', description: 'This task has been updated.' };

          const action = updateTask(updatedTask);
          const state = taskReducer(initialState, action);
    
          expect(state).not.toBe(initialState);
  
        })});


      describe('deleteTask action', () => {
        it('should update the state in an immutable way', () => {
          const initialState: Task[] = [
            {
              id: 1,
              title: 'Test',
              description: 'Description',
              completed: true
            }
          ];
          const action = deleteTask(1);
          const state = taskReducer(initialState, action);
    
          expect(state.length).toEqual(0);
        });
    
        it('should not update the state when showId does not exist', () => {
            const initialState: Task[] = [
                {
                  id: 1,
                  title: 'Test',
                  description: 'Description',
                  completed: true
                }
              ];
              const action = deleteTask(2);
              const state = taskReducer(initialState, action);
    
          expect(state.length).toEqual(1);
        });
      });

})