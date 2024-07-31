import { Component } from '@angular/core';
import { TaskListComponent } from "../../features/task-list/task-list.component";
@Component({
  selector: 'app-home-task-manager',
  standalone: true,
  imports: [ TaskListComponent],
  templateUrl: './home-task-manager.component.html',
  styleUrl: './home-task-manager.component.css',
 
})
export class HomeTaskManagerComponent {
 
}
