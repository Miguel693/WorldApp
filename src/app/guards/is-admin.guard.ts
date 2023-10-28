import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { Roles } from '../auth/interfaces';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if( authService.currentRole().includes(Roles.admin) )
    return true;

  router.navigateByUrl('auth/login');
  return false;
};
