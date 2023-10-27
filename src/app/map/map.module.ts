import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapLayoutComponent } from './layout/map-layout.component';
import { MapComponent } from './pages/map/map.component';
import { MaterialModule } from '../material/material.module';
import { MarkersComponent } from './pages/markers/markers.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component';
import { AddMarkerButtonComponent } from './components/add-marker-button/add-marker.component';


@NgModule({
  declarations: [
    MapLayoutComponent,
    MapComponent,
    MarkersComponent,
    CountryInfoComponent,
    AddMarkerButtonComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,

    MaterialModule
  ]
})
export class MapModule { }
