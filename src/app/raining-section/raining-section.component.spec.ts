import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainingSectionComponent } from './raining-section.component';

describe('RainingSectionComponent', () => {
  let component: RainingSectionComponent;
  let fixture: ComponentFixture<RainingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
