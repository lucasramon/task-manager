import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeTaskManagerComponent } from '../pages/home-task-manager/home-task-manager.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeTaskManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
}
