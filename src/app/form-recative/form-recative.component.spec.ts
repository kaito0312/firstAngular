import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecativeComponent } from './form-recative.component';

describe('FormRecativeComponent', () => {
  let component: FormRecativeComponent;
  let fixture: ComponentFixture<FormRecativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRecativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
