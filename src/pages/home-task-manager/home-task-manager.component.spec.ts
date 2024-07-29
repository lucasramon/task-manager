import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTaskManagerComponent } from './home-task-manager.component';

describe('HomeTaskManagerComponent', () => {
  let component: HomeTaskManagerComponent;
  let fixture: ComponentFixture<HomeTaskManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTaskManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeTaskManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
