import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [TemplateFormComponent, ReactiveFormComponent],
  imports: [
    CommonModule,
    FormRoutingModule
  ],
  exports: [
    TemplateFormComponent,
    ReactiveFormComponent
  ]
})
export class FormModule { }
