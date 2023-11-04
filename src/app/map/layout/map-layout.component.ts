import { Component, OnInit, inject, signal, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';



@Component({
  selector: 'map-layout',
  templateUrl: './map-layout.component.html',
  styleUrls: ['./map-layout.component.css']
})
export class MapLayoutComponent implements OnInit{
  private router = inject(Router);
  private authService = inject(AuthService);

  public user = this.authService.currentUser();

  ngOnInit(): void {
    if(window.location.href.includes('map-screen'))
    this.router.navigateByUrl('/map/map-screen');
  }

  public sideBarItems= [
    {label : 'Mapa', icon : 'map', url: '/map/map-screen'},
    {label : 'Mas informacion', icon : 'info', url: '/map/country-info'},
    {label : 'Marcadores', icon : 'place', url: '/map/markers'},
  ]

  public logout() : void {
    this.authService.logout();
  }

}
