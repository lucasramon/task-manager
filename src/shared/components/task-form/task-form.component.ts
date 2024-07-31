import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Task } from '../../interfaces/task.interface';

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



ngOnChanges(changes: SimpleChanges): void {
  this.taskForm.setValue(changes['taskValue'].currentValue)
}


  taskForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required]),
    completed: new FormControl(false, [Validators.required])
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
