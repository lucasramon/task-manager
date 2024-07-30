import { Component } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { taskSelector } from '../../services/task.selectors';
import { AppState } from '../../interfaces/appState.interface';
import { Store } from '@ngrx/store';
import { addTask, updateTask, deleteTask, markTaskAsComplete, unmarkTaskAsComplete } from '../../services/task.actions';
import { AsyncPipe } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { buttonPayload } from '../../interfaces/buttonPayload.interface';
import { TaskFormComponent } from '../task-form/task-form.component';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [AsyncPipe, TaskItemComponent, TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks$ = this.store.select(taskSelector);
  constructor(private store: Store<AppState>) { }

  addNewTask(payload: Task) {
    
    this.store.select(taskSelector).subscribe(item => {
      const itemForSort = [...item]
      // itemForSort.sort((a, b) => b.id - a.id);

      const max = itemForSort[0].id;
      payload.id = 23
      
      this.store.dispatch(addTask(payload));
    })

  }

  updateTask(task: Task) {
    const updatedTask: Task = { ...task, title: 'Updated Task', description: 'This task has been updated.' };
    this.store.dispatch(updateTask(updatedTask));
  }


  buttonClickHandle(payload: buttonPayload) {
    switch (payload.buttonType) {
      case 'delete':
        this.deleteTask(payload.taskId);
        break;

      case 'markComplete':
        this.markAsComplete(payload.taskId);
        break;

      case 'unmarkComplete':
        this.unmarkAsComplete(payload.taskId);
        break;
    }
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask(id));
  }

  markAsComplete(id: number) {
    this.store.dispatch(markTaskAsComplete(id));
  }

  unmarkAsComplete(id: number) {
    this.store.dispatch(unmarkTaskAsComplete(id));
  }
}
