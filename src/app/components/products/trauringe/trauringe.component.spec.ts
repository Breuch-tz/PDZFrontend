import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrauringeComponent } from './trauringe.component';

describe('TrauringeComponent', () => {
  let component: TrauringeComponent;
  let fixture: ComponentFixture<TrauringeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrauringeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrauringeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
