import { Component } from '@angular/core';
import { Task } from '../../shared/interfaces/task.interface';
import { taskSelector } from '../../shared/services/task.selectors';
import { AppState } from '../../shared/interfaces/appState.interface';
import { Store } from '@ngrx/store';
import { addTask, updateTask, deleteTask, markTaskAsComplete, unmarkTaskAsComplete } from '../../shared/services/task.actions';
import { AsyncPipe } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { buttonPayload } from '../../shared/interfaces/buttonPayload.interface';
import { TaskFormComponent } from '../task-form/task-form.component';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [AsyncPipe, TaskItemComponent, TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  constructor(private store: Store<AppState>) { }

  tasks$ = this.store.select(taskSelector);

  addNewTask(payload: Task) {
    this.store.dispatch(addTask(payload));
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
