import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingListComponent } from './setting-list/setting-list.component';
import { SharedModule } from '../shared/shared.module';
import { SettingComponent } from './setting.component';


@NgModule({
  declarations: [SettingListComponent, SettingComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    SharedModule
  ],
  exports: [
    SettingListComponent
  ]
})
export class SettingModule {}
