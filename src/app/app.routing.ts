import {RouterModule, Routes} from '@angular/router';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router';
import {LoginModule} from './auth/login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';

@RouteConfig([
    {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true},
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Login']}
])

export class AppRoutingModule {
}
