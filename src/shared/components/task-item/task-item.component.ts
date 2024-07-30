import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { buttonPayload } from '../../interfaces/buttonPayload.interface';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() task: Task = {
    id:0,
    title:'',
    description:'',
    completed: false
  }

  @Output() clickButtonEvent = new EventEmitter<buttonPayload>();

  onButtonClick(buttonType: string,taskId:number) {
    this.clickButtonEvent.emit({buttonType,taskId});
  }

}
