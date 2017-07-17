import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

enableProdMode();

// IE Cannot be used due to many issues with SVGs
if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {
  let warning = document.querySelector('.internet-explorer-warning') as HTMLElement;
  warning.style.display = '';
} else {
  platformBrowserDynamic().bootstrapModule(AppModule);
}
