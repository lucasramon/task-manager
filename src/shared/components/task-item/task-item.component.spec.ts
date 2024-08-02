import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemComponent } from './task-item.component';
import { provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskItemComponent],
      providers: [provideMockStore({})],

    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should get the unMark and mark itens as completed or incompleted function when button is clicked', (() => {
    spyOn(component,'onButtonClick');
    
    fixture.debugElement.query(By.css('#checkMark-button')).nativeElement.click();
    expect(component.onButtonClick).toHaveBeenCalled();

  }));

  it('should get the open modal function open when button is clicked', (() => {
    spyOn(component,'openDialog');
    
    fixture.debugElement.query(By.css('#open-edit-button')).nativeElement.click();
    expect(component.openDialog).toHaveBeenCalled();

  }));


  it('should get the delete function when button is clicked', (() => {
    spyOn(component,'onButtonClick');
    
    fixture.debugElement.query(By.css('#delete-button')).nativeElement.click();
    expect(component.onButtonClick).toHaveBeenCalled();

  }));
});
