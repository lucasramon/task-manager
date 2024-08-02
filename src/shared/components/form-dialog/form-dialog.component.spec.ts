import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogComponent } from './form-dialog.component';
import { findComponent } from '../../utils/testing-helpers';
import { By } from '@angular/platform-browser';

describe('FormDialogComponent', () => {
  let component: FormDialogComponent;
  let fixture: ComponentFixture<FormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the close modal function open when button is clicked', (() => {
    spyOn(component,'closeDialog');
  
    fixture.debugElement.query(By.css('#close-modal-button')).nativeElement.click();

    expect(component.closeDialog).toHaveBeenCalled();

  }));


  it('renders app-task-form component that is called from the form-dialog component', () => {
    const taskListComponent = findComponent(fixture, 'app-task-form');
    expect(taskListComponent).toBeTruthy();
  });
});
