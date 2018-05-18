import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
    enableProdMode();
}

let bootstrap = () => {
    platformBrowserDynamic().bootstrapModule(AppModule);
};

if (window.cordova) {
    document.addEventListener('deviceready', bootstrap.bind(this), false);
}

else {
    bootstrap();
}