import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgComponent } from './org/org.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MemberComponent } from './member/member.component';
import { FunctionsComponent } from './functions/functions.component';
import { TemplateFormComponent } from './form/template-form/template-form.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'functions',
    pathMatch: 'full'
  },
  {
    path: 'functions',
    component: FunctionsComponent,
    children: [
      {
        path: 'member/:userId',
        component: MemberComponent
      },
      {
        path: 'org',
        component: OrgComponent
      }
    ]
  },
  {
    path: 'form-template',
    component: TemplateFormComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false // console the route
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
