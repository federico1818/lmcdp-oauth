import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordEmailFormComponent } from './password-email-form.component';

describe('PasswordEmailFormComponent', () => {
  let component: PasswordEmailFormComponent;
  let fixture: ComponentFixture<PasswordEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordEmailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
