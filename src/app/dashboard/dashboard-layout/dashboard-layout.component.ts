import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {
  private authService = inject(AuthService);

  get user(){
    return this.authService.currentUser();
  }

  public logout(){
    this.authService.logout();
  }
}
