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
  @Output() formCompleteEvent = new EventEmitter<Task>();
  @Input() initialStateTask: Task = {
    id:0,
    title:'',
    description:'',
    completed: false
  }



  emitData(task: Task, dialog: HTMLDialogElement) {
    this.formCompleteEvent.emit(task)
    dialog.close();
  }

  closeDialog(dialog: HTMLDialogElement){
    dialog.close();
  }
}
