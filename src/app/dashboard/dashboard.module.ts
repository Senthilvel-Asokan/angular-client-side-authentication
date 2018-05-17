import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard.routing';
import {AuthModule} from '../auth/auth.module';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AuthModule
  ],
  declarations: [DashboardComponent],
  providers: []
})
export class DashboardModule {
}
