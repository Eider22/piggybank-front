import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoTopUpComponent } from './do-top-up.component';

describe('DoTopUpComponent', () => {
  let component: DoTopUpComponent;
  let fixture: ComponentFixture<DoTopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoTopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoTopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
