import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { AuthStatus } from '../auth/interfaces/auth-status.enum';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if( authService.authStatus() === AuthStatus.authenticated )
    return true;

  if( authService.authStatus() === AuthStatus.notAuthenticated)
    return false

  router.navigateByUrl('auth/login');
  return false;

};
