import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTplComponent } from './form-tpl.component';

describe('FormTplComponent', () => {
  let component: FormTplComponent;
  let fixture: ComponentFixture<FormTplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
