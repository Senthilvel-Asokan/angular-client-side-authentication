import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {LoginComponent} from './auth/login/login.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {AuthCheck} from './auth/authcheck';

@NgModule({
  declarations: [
    AppComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
