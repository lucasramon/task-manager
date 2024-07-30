import { Task } from '../models/task.model';
import { taskSelector, selectTaskById } from './task.selectors'; 

const initialState: Task[] = [
    {
      id: 1,
      title: 'Test',
      description: 'Description',
      completed: true
    },
    {
        id: 2,
        title: 'Test2',
        description: 'Description2',
        completed: true
      },

  ];

describe('Selectors', () => {
  it('should select all tasks', () => {
   const result=taskSelector.projector(initialState)
   expect(result.length).toEqual(initialState.length);
  });


  it('should select one task by its Id', () => {
    const testId = 1
    const result= selectTaskById(testId).projector(initialState);
    expect(result?.id).toEqual(testId);
   });

   it('should return undefined when the task is nonexistent', () => {
    const testId = 3
    const result= selectTaskById(testId).projector(initialState);
    expect(result).toBeUndefined();
   });
});
