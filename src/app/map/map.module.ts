import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapLayoutComponent } from './map-layout/map-layout.component';


@NgModule({
  declarations: [
    MapLayoutComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule
  ]
})
export class MapModule { }
