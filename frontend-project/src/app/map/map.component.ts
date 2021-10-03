import { Component, OnInit } from '@angular/core';

import * as Mapboxgl from 'mapbox-gl';

import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }
  
  map: Mapboxgl.Map;


  ngOnInit(): void {
    (Mapboxgl as any).accessToken = environment.mapKey;
    this.map = new Mapboxgl.Map({
      container: 'mapa', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-46.714172451750365, -23.5225015], // LNG, LAT
      zoom: 10 // starting zoom
      });

      this.markCreate(-46.775172451750365, -23.52261216718128, 'Tiete River');
      this.markCreate(-46.73977136263471, -23.54074184193692, 'Pinheiros River');
      this.markCreate(-46.626432918, -23.5515382, 'Tamanduateí River');
  }

  markCreate(longitude: number, latitude: number, riverName:  string) {
    const marker = new Mapboxgl.Marker({      
      color: "#b07219",
      draggable: false
      })
      .setLngLat([longitude, latitude])
      .setPopup(
        new Mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            `<h3 style='padding: 15px 5px;'>${riverName}</h3>`      
          )
      )
      .addTo(this.map);

      marker.on('drag', () => {
        console.log( marker.getLngLat() )
      })
  }

}
