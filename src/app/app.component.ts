import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from './auth/interfaces/auth-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendApp';


  private authService = inject(AuthService);
  private router = inject(Router);


  public check = computed<boolean>( () => {
    if(this.authService.authStatus() === AuthStatus.checking)
      return false;
    return true;
  });


  public authStatusChange = effect( () => {

    switch( this.authService.authStatus()){
      case AuthStatus.authenticated:
        this.router.navigateByUrl('/map')
        break;
        case AuthStatus.notAuthenticated:
          // this.router.navigateByUrl('/dashboard')
          // this.router.navigateByUrl('/map')
          this.router.navigateByUrl('/auth/login')
        break;
    }

  })

}
