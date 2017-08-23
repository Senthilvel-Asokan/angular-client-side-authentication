import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';
import {FormsModule} from '@angular/forms';

import {AuthRoutingModule} from './auth.routing';
import {AuthCheck} from './authcheck';
import {MockBackendModule} from '../mock-backend/mock-backend.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    // HttpModule <- use this in real implementation
    MockBackendModule // <- provide fake Http service, do not use in production!
  ],
  declarations: [LoginComponent],
  providers: [
    AuthService,
    AuthCheck,
    {provide: 'AUTH_TOKEN', useValue: 'token'},
    {provide: 'AUTH_USER', useValue: 'user'}
  ],
  exports: []
})
export class AuthModule {
}
