import { Component } from '@angular/core';
import { TaskListComponent } from "../../shared/components/task-list/task-list.component";
import { TaskFormComponent } from '../../shared/components/task-form/task-form.component';
import { addTask } from '../../shared/services/task.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/interfaces/appState.interface';
import { Task } from '../../shared/interfaces/task.interface';
import { FormDialogComponent } from '../../shared/components/form-dialog/form-dialog.component';
import { taskSelector } from '../../shared/services/task.selectors';
@Component({
  selector: 'app-home-task-manager',
  standalone: true,
  imports: [TaskListComponent, TaskFormComponent, FormDialogComponent],
  templateUrl: './home-task-manager.component.html',
  styleUrl: './home-task-manager.component.css',
  providers: []

})
export class HomeTaskManagerComponent {
  tasks$ = this.store.select(taskSelector);
  taskList: Task[] = [];
  
  constructor(private store: Store<AppState>) {
  this.tasks$.subscribe(list => {
    this.taskList = list
  })

  }
  addNewTask(payload: Task) {
    this.store.dispatch(addTask(payload));
  }

  openDialog(dialog: HTMLDialogElement) {
    dialog.showModal()
  }
}
