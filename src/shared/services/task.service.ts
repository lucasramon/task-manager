import { Injectable } from '@angular/core';
import { Init } from './Init.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends Init {

  constructor() { 
    super();
    this.load();
  }
}
