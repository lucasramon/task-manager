import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { HomeTaskManagerComponent } from './home-task-manager.component';
import { findComponent } from '../../shared/utils/testing-helpers';

describe('HomeTaskManagerComponent', () => {
  let homeTaskComponent: HomeTaskManagerComponent;
  let fixture: ComponentFixture<HomeTaskManagerComponent>;
  let dialog: HTMLDialogElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTaskManagerComponent],
      providers: [provideMockStore({})],

      
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeTaskManagerComponent);
    homeTaskComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(homeTaskComponent).toBeTruthy();
  });


  it('should get the open modal function open when button is clicked', (() => {
    spyOn(homeTaskComponent,'openDialog');
  

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(homeTaskComponent.openDialog).toHaveBeenCalled();

  }));


  it('renders task list component that is called from the home task manager component', () => {
    const taskListComponent = findComponent(fixture, 'app-task-list');
    expect(taskListComponent).toBeTruthy();
  });
  
});
