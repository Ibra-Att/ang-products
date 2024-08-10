import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs';
import {  LoadingSpinner } from '../_services/loading-spinner.service';

export const loadingDelayInterceptor: HttpInterceptorFn = (req, next) => {
  let loadingSpinner = inject(LoadingSpinner);

  loadingSpinner.busy();

  return next(req).pipe(
    delay(1000),
    finalize(() => {
      loadingSpinner.idle()
    })
  )
};
