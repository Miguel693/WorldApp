import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

// (mapboxgl as any).accessToken = 'pk.eyJ1IjoibWlndWVsNjkzIiwiYSI6ImNsbmR5YzA4azA4YnUya3BrNHMyNGx0YjkifQ.FbgA3hNLbSOUOeMvSkAjXg';


@Component({
  selector: 'map-layout',
  templateUrl: './map-layout.component.html',
  styleUrls: ['./map-layout.component.css']
})
export class MapLayoutComponent {


  // map = new mapboxgl.Map({
  //   container: 'map', // container ID
  //   style: 'mapbox://styles/mapbox/streets-v12', // style URL
  //   center: [-74.5, 40], // starting position [lng, lat]
  //   zoom: 9, // starting zoom
  // });
}
