import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoToUpFormComponent } from './do-to-up-form.component';

describe('DoToUpFormComponent', () => {
  let component: DoToUpFormComponent;
  let fixture: ComponentFixture<DoToUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoToUpFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DoToUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
