import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainingsessionComponent } from './update-trainingsession.component';

describe('UpdateTrainingsessionComponent', () => {
  let component: UpdateTrainingsessionComponent;
  let fixture: ComponentFixture<UpdateTrainingsessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrainingsessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrainingsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
