import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UhrenSchmuckComponent } from './uhren-schmuck.component';

describe('UhrenSchmuckComponent', () => {
  let component: UhrenSchmuckComponent;
  let fixture: ComponentFixture<UhrenSchmuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UhrenSchmuckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UhrenSchmuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
