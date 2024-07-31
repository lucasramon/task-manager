import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Task } from '../../shared/interfaces/task.interface';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  @Input() taskValue: Task = {
    id:0,
    title:'',
    description:'',
    completed: false
  }

  @Output() formCompleteEvent= new EventEmitter<Task>();

  taskForm = new FormGroup({
    id: new FormControl(this.taskValue.id, Validators.required),
    title: new FormControl(this.taskValue.title, Validators.required),
    description: new FormControl(this.taskValue.description, [Validators.required]),
    completed: new FormControl(this.taskValue.completed, [Validators.required])
  });

  onSubmit() {
    const formValue = this.generatePayloadData();
    this.formCompleteEvent.emit(formValue)
  }

  private generatePayloadData(): Task {
    const payload: Task = {
      id: this.taskForm.value.id!,
      title: this.taskForm.value.title!,
      description: this.taskForm.value.description!,
      completed: this.taskForm.value.completed!,
    }
    return payload;
  }
}
