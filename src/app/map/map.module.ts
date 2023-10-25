import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapLayoutComponent } from './layout/map-layout.component';
import { MapComponent } from './components/map/map.component';
import { MaterialModule } from '../material/material.module';
import { MarkersComponent } from './pages/markers/markers.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component';


@NgModule({
  declarations: [
    MapLayoutComponent,
    MapComponent,
    MarkersComponent,
    CountryInfoComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,

    MaterialModule
  ]
})
export class MapModule { }
