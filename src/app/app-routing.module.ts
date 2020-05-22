import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrgComponent } from './org/org.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MemberComponent } from './member/member.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'org',
    pathMatch: 'full'
  },
  {
    path: 'org',
    component: OrgComponent,
    children: [
      {
        path: 'member',
        component: MemberComponent,
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
