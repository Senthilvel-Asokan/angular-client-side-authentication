import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {AuthCheck} from '../auth/authcheck';

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthCheck]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
