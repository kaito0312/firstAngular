import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgComponent } from '../org/org.component';
import { SettingListComponent } from './setting-list/setting-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'org',
    pathMatch: 'full'
  },
  {
    path: 'setting',
    loadChildren: './setting/setting.module#SettingModule'
  },
  {
    path: 'list',
    component: SettingListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
