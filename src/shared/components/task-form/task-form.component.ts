import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Task } from '../../interfaces/task.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  @Input() taskValue: any 
  @Output() formCompleteEvent= new EventEmitter<Task>();



ngOnChanges(changes: SimpleChanges): void {
  this.taskForm.setValue(changes['taskValue'].currentValue)
}


  taskForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl(false, Validators.required)
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
