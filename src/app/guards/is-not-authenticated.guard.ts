import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { AuthStatus } from '../auth/interfaces';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  if( authService.authStatus() === AuthStatus.notAuthenticated)
    return true;
  return false;
};
