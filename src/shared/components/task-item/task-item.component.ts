import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { buttonPayload } from '../../interfaces/buttonPayload.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/appState.interface';
import { updateTask } from '../../services/task.actions';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})

export class TaskItemComponent {
  constructor(private store: Store<AppState>) { }
  @Input() task: Task = {
    id:0,
    title:'',
    description:'',
    completed: false
  }

  @Output() clickButtonEvent = new EventEmitter<buttonPayload>();


  updateTask(task: Task) {
    const updatedTask: Task = { ...task, title: 'Updated Task', description: 'This task has been updated.' };
    this.store.dispatch(updateTask(updatedTask));
  }

  onButtonClick(buttonType: string,taskId:number) {
    this.clickButtonEvent.emit({buttonType,taskId});
  }

}
