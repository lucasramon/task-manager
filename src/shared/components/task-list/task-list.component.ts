import { Component, Input } from '@angular/core';
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
  @Input() tasks: Task[] = [];

  constructor(private store: Store<AppState>) { }
  

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
