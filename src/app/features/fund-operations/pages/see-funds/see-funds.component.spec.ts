import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeFundsComponent } from './see-funds.component';

describe('SeeFundsComponent', () => {
  let component: SeeFundsComponent;
  let fixture: ComponentFixture<SeeFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeFundsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
