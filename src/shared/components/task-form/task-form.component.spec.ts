import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskFormComponent } from './task-form.component';
import { provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

describe('TaskFormComponent', () => {
    let component: TaskFormComponent;
    let fixture: ComponentFixture<TaskFormComponent>;
    const testTitleString = 'Varrer a casa';
    const testDescriptiontring = 'a casa tá suja e tem que varrer';

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TaskFormComponent],
            providers: [provideMockStore({})],

        })
            .compileComponents();

        fixture = TestBed.createComponent(TaskFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('test title input', () => {
        const titleInput = fixture.debugElement.query(By.css("#taskTitleId")).nativeElement;
        expect(titleInput.value).toBe('');

        titleInput.value = testTitleString;
        titleInput.dispatchEvent(new Event('input'));

        expect(component.taskForm.value.title).toBe(testTitleString);

    });

    it('test description input', () => {
        const descriptionInput = fixture.debugElement.query(By.css("#taskDescriptionId")).nativeElement;
        expect(descriptionInput.value).toBe('');

        descriptionInput.value = testDescriptiontring;
        descriptionInput.dispatchEvent(new Event('input'));

        expect(component.taskForm.value.description).toBe(testDescriptiontring);

    });

    it('test if form is valid after title and description inputs', () => {
        const titleInput = fixture.debugElement.query(By.css("#taskTitleId")).nativeElement;
        const descriptionInput = fixture.debugElement.query(By.css("#taskDescriptionId")).nativeElement;
        
        titleInput.value = testTitleString;
        descriptionInput.value = testDescriptiontring;


        titleInput.dispatchEvent(new Event('input'));
        descriptionInput.dispatchEvent(new Event('input'));

        expect(component.taskForm.valid).toBe(true);

    });


    it('should check if submit button is disabled when form is incomplete', (() => {
        
        let button = fixture.debugElement.nativeElement.querySelector('button');
        
        expect(button.disabled).toBeTrue();
    
      }));

    it('should get the submit function when button is clicked', (() => {
        spyOn(component,'onSubmit');

        const titleInput = fixture.debugElement.query(By.css("#taskTitleId")).nativeElement;
        const descriptionInput = fixture.debugElement.query(By.css("#taskDescriptionId")).nativeElement;
        
        titleInput.value = testTitleString;
        descriptionInput.value = testDescriptiontring;


        titleInput.dispatchEvent(new Event('input'));
        descriptionInput.dispatchEvent(new Event('input'));

        fixture.detectChanges();
        
        let button = fixture.debugElement.nativeElement.querySelector('button');
        expect(button.disabled).toBeFalsy();

        button.click();        
        expect(component.onSubmit).toHaveBeenCalled();
    
      }));



});
