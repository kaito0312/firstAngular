import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageControlComponent } from './page-control/page-control.component';
import { MosaicPipe } from './mosaic.pipe';
import { HightlightDirective } from './hightlight.directive';



@NgModule({
  declarations: [PageControlComponent, MosaicPipe, HightlightDirective],
  imports: [
    CommonModule
  ],
  exports: [
    PageControlComponent,
    MosaicPipe,
    HightlightDirective
  ]
})
export class SharedModule { }
