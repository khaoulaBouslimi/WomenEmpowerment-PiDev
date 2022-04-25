import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainingsessionComponent } from './create-trainingsession.component';

describe('CreateTrainingsessionComponent', () => {
  let component: CreateTrainingsessionComponent;
  let fixture: ComponentFixture<CreateTrainingsessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrainingsessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrainingsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
