import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'map-layout',
  templateUrl: './map-layout.component.html',
  styleUrls: ['./map-layout.component.css']
})
export class MapLayoutComponent implements OnInit{
  private router = inject(Router);

  ngOnInit(): void {
    this.router.navigateByUrl('/map/map-screen');
  }

  public sideBarItems= [
    {label : 'Mapa', icon : 'map', url: '/map/map-screen'},
    {label : 'Mas informacion', icon : 'info', url: '/map/country-info'},
    {label : 'Marcadores', icon : 'place', url: '/map/markers'},
  ]

  public displayMarkers = signal(false);

}
