import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from "@angular/platform-browser";
import { map, of } from 'rxjs';
import { TaskItemComponent } from '../task-item/task-item.component';
import { createComponent, findComponent } from '../../utils/testing-helpers';
import { AppState } from '../../interfaces/appState.interface';
import { Store } from '@ngrx/store';
import { taskSelector } from '../../services/task.selectors';
import { Task } from '../../interfaces/task.interface';
import { Component, Input } from '@angular/core';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  const mockData = [
    {
      "id": 1,
      "title": "Lavar a louça.",
      "description": "A louça está suja na pia, vai lavar logo.",
      "completed": false
    },
    {
      "id": 2,
      "title": "Fazer a feira.",
      "description": "Estão faltando coisas na casa, e os meus amigos vem pra cá em breve. Lembrar de comprar cerveja.",
      "completed": true
    },
    {
      "id": 3,
      "title": "Limpar a casa.",
      "description": "A casa precisa ser limpa.",
      "completed": false
    },
  ]



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListComponent, TaskItemComponent],
      declarations: [],
      providers: [provideMockStore({})],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a fake task-list component with a list of 3 itens', () => {
    component.tasks = mockData;
    fixture.detectChanges();

    expect(component.tasks.length).toBe(3);
    
    const taskListComponent = findComponent(fixture, 'app-task-item');
    expect(taskListComponent).toBeTruthy();
  
  })

  it('should render a task-list component with a empty list message', () => {

    const listElement: HTMLElement = fixture.debugElement.query(By.css('.empty-list')).nativeElement;
    expect(listElement.innerText).toBe('Lista de tarefas vazia');
  })


});
