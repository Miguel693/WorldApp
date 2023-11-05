import { AfterViewInit, Component, ElementRef, ViewChild, Injectable } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';


@Component({
  selector: 'mapbox',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css',],

})

@Injectable()
export class MapComponent implements AfterViewInit{
  @ViewChild('map') divMap ?: ElementRef;

  public map ?: Map;
  public lnglat ?: LngLat;
  public markers ?: Marker[];
  ngAfterViewInit(): void {
    if(!this.divMap) throw 'El mapa no fue encontrado';
    this.map = new Map({
      container: this.divMap?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-68, -38],
      zoom: 3,
    });

  }

  public addNewMarker(){
    const lngLat = this.map!.getCenter();
    const newMarker = new Marker({color : 'red', draggable: true}).setLngLat(lngLat).addTo(this.map!);
    this.markers?.push(newMarker);
  }


}
