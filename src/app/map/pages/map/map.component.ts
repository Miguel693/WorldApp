import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


(mapboxgl as any).accessToken = 'pk.eyJ1IjoibWlndWVsNjkzIiwiYSI6ImNsbmR6dGh1bTA5ZXUyam1rYnA1ZHlrbHUifQ.oP_xUgtJA0vJ6KUpXkFOww';

@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements AfterViewInit{
  @ViewChild('map') divMap ?: ElementRef;

  ngAfterViewInit(): void {
    if(!this.divMap) throw 'El mapa no fue encontrado';

    const map = new mapboxgl.Map({
      // container: 'map',  container ID
      container: this.divMap?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-68, -38], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
