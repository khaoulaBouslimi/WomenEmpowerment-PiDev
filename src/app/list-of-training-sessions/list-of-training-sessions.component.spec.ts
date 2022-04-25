import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTrainingSessionsComponent } from './list-of-training-sessions.component';

describe('ListOfTrainingSessionsComponent', () => {
  let component: ListOfTrainingSessionsComponent;
  let fixture: ComponentFixture<ListOfTrainingSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTrainingSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTrainingSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
