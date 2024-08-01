import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form.component';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.css'
})
export class FormDialogComponent {
  @Input() dialog!: HTMLDialogElement;
  @Input() isNewTask: boolean = false;
  @Output() formCompleteEvent = new EventEmitter<Task>();
  @Input() initialStateTask: Task = {
    id:0,
    title:'',
    description:'',
    completed: false
  }



  upData(task: Task) {
    this.formCompleteEvent.emit(task)

  }
}
