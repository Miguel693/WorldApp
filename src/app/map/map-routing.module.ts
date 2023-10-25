import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapLayoutComponent } from './layout/map-layout.component';
import { MapComponent } from './components/map/map.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component';

const routes: Routes = [
  {
    path: '',
    component: MapLayoutComponent,
    children: [
      { path: 'country-info', component: CountryInfoComponent},
      { path: 'map-screen'  , component: MapComponent},
      { path: 'markers'     , component: MarkersComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
