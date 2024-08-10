import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { timeout } from 'rxjs';
import { errorInterceptor } from './_interceptors/error.interceptor';
import { jwtInterceptor } from './_interceptors/jwt.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // provideHttpClient(withInterceptors([errorInterceptor])),
    provideHttpClient(withInterceptors([errorInterceptor,jwtInterceptor])),
    // provideHttpClient(withInterceptors([jwtInterceptor])),

    // provideHttpClient(),
    provideAnimations(),
    provideToastr({positionClass:"toast-top-center",timeOut:2000}),
    importProvidersFrom(NgxSpinnerModule), provideAnimationsAsync(),
  
  ]
};
