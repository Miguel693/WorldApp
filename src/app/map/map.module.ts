import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapLayoutComponent } from './layout/map-layout.component';
import { MapComponent } from './pages/map/map.component';
import { MaterialModule } from '../material/material.module';
import { MarkersComponent } from './pages/markers/markers.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component';
import { AddMarkerButtonComponent } from './components/add-marker-button/add-marker.component';
import { MarkerCardComponent } from './components/marker-card/marker-card.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';

import * as mapboxgl from 'mapbox-gl';
// apikey por defecto de mapbox
(mapboxgl as any).accessToken = 'pk.eyJ1IjoibWlndWVsNjkzIiwiYSI6ImNsbmR5YzA4azA4YnUya3BrNHMyNGx0YjkifQ.FbgA3hNLbSOUOeMvSkAjXg';

@NgModule({
  declarations: [
    MapLayoutComponent,
    MapComponent,
    MarkersComponent,
    CountryInfoComponent,
    AddMarkerButtonComponent,
    MarkerCardComponent,
    MiniMapComponent,
  ],
  imports: [
    CommonModule,
    MapRoutingModule,

    MaterialModule
  ]
})
export class MapModule { }
