import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accountService = inject(AccountService);
  const currentUser = accountService.currentUser();

  if (currentUser && currentUser.token) {
    req = req.clone({
      setHeaders: {
        Authorization: `${currentUser.token}` 
      }
    });
  }

  return next(req);
};


//for jwt bearer: 
// import { HttpInterceptorFn } from '@angular/common/http';
// import { AccountService } from '../_services/account.service';
// import { inject } from '@angular/core';

// export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
//   const accountService = inject(AccountService);

//   if (accountService.currentUser()) {
//     req = req.clone({
//       setHeaders: {
//         // Authorization: Bearer ${accountService.currentUser()?.token}
//         Authorization: ${accountService.currentUser()?.token}

//       }
//     })
//   }

//   return next(req);
// };