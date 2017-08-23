import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrap } from '@angular/platform/browser';

import { AppModule } from './app/auth/app.module';
import { AppRoutingModule } from './app/auth/app.routing';
import { environment } from './environments/environment';

import { AppComponent } from './app/app.component';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

//bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, AppRoutingModule);
