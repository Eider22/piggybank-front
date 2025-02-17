import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeFundsFormComponent } from './see-funds-form.component';

describe('SeeFundsFormComponent', () => {
  let component: SeeFundsFormComponent;
  let fixture: ComponentFixture<SeeFundsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeFundsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeFundsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
