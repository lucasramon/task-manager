import { Component } from '@angular/core';
import { TaskFormComponent } from "../../shared/components/task-form/task-form.component";
import { TaskItemComponent } from "../../shared/components/task-item/task-item.component";
import { TaskListComponent } from "../../shared/components/task-list/task-list.component";
import { Task } from '../../shared/models/task.model';
import { taskSelector } from '../../shared/services/task.selectors';
import { AppState } from '../../shared/interfaces/task.interface';
import { Store } from '@ngrx/store';
import { addTask, updateTask, deleteTask, markTaskAsComplete, unmarkTaskAsComplete } from '../../shared/services/task.actions';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-home-task-manager',
  standalone: true,
  imports: [TaskFormComponent, TaskItemComponent, TaskListComponent, AsyncPipe],
  templateUrl: './home-task-manager.component.html',
  styleUrl: './home-task-manager.component.css',
 
})
export class HomeTaskManagerComponent {
 

  tasks$ = this.store.select(taskSelector);
  constructor(private store: Store<AppState>) {}

  addNewTask() {
    const newTask: Task = {
      id: 23,
      title: 'New Task',
      description: 'This is a new task.',
      completed:false
    };
    this.store.dispatch(addTask( newTask ));
  }

  updateTask(task: Task) {
    const updatedTask: Task = { ...task, title: 'Updated Task', description: 'This task has been updated.' };
    this.store.dispatch(updateTask(updatedTask));
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
