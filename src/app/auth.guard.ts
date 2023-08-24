import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let issloggedId = localStorage.getItem('isLogedin');
  if (issloggedId == 'false') {
    alert('Not Authenticated User !!');
    return false;
  }
  return true;
};
