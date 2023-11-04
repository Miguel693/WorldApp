import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from './auth/interfaces/auth-status.enum';
import { Roles } from './auth/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'frontendApp';

  private authService = inject(AuthService);
  private router = inject(Router);

  public finishedAuthCheck = computed<boolean>(() => {
    if(this.authService.authStatus() === AuthStatus.checking)
      return false;
    return true;
  })

  public authStatusChange = effect( () => {
    switch( this.authService.authStatus()){
      case AuthStatus.authenticated:
        if(window.location.href.includes('dashboard')) return;
        if(window.location.href.includes('map')) return;
        if(this.authService.currentRole().includes(Roles.admin)){
          this.router.navigateByUrl('/dashboard')
          return;
        }

        this.router.navigateByUrl('/map');
        return;
      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login')
        return;
    }
  })
}
