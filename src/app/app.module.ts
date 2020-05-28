import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrgComponent } from './org/org.component';
import { MemberComponent } from './member/member.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FunctionsComponent } from './functions/functions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { SettingModule } from './setting/setting.module';
import { FormModule } from './form/form.module';
import { FormTplComponent } from './form-tpl/form-tpl.component';
import { FormRecativeComponent } from './form-recative/form-recative.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrgComponent,
    MemberComponent,
    PageNotFoundComponent,
    FunctionsComponent,
    FormTplComponent,
    FormRecativeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    UserModule,
    SettingModule,
    ReactiveFormsModule,
    FormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
