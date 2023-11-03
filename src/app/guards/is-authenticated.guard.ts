import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { AuthStatus } from '../auth/interfaces/auth-status.enum';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  if( authService.authStatus() === AuthStatus.authenticated )
    return true;
  return false;
};
