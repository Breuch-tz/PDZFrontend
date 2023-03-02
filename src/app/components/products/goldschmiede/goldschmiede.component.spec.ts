import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldschmiedeComponent } from './goldschmiede.component';

describe('GoldschmiedeComponent', () => {
  let component: GoldschmiedeComponent;
  let fixture: ComponentFixture<GoldschmiedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldschmiedeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldschmiedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
