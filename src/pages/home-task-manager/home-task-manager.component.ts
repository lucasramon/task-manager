import { Component } from '@angular/core';
import { TaskFormComponent } from "../../shared/components/task-form/task-form.component";
import { TaskItemComponent } from "../../shared/components/task-item/task-item.component";
import { TaskListComponent } from "../../shared/components/task-list/task-list.component";
import { Task } from '../../shared/models/task.model';

@Component({
  selector: 'app-home-task-manager',
  standalone: true,
  imports: [TaskFormComponent, TaskItemComponent, TaskListComponent],
  templateUrl: './home-task-manager.component.html',
  styleUrl: './home-task-manager.component.css',
 
})
export class HomeTaskManagerComponent {
  tasks: Task[] = [];

  

}
