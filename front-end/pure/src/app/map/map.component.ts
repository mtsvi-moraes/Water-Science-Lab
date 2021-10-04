import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as Mapboxgl from 'mapbox-gl';

import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,) { }
  dataCountries: any;
  selectedPlace: any;


  map: Mapboxgl.Map;



  ngOnInit(): void {
    this.dataCountries = JSON.parse(localStorage.getItem('dataMap'));
    this.route.queryParams
      .subscribe((elem: any) => {
        if (Object.keys(elem).length) {
          this.selectedPlace = this.dataCountries.find(e => e.name == elem.country).states.find(e => e.name == elem.state);
        }
      }).unsubscribe();

    (Mapboxgl as any).accessToken = environment.mapKey;
    this.map = new Mapboxgl.Map({
      container: 'mapa', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      // center: [-46.714172451750365, -23.5225015], // LNG, LAT
      center: [this.selectedPlace.rivers[0].lng, this.selectedPlace.rivers[0].lat], // LNG, LAT
      zoom: 10 // starting zoom
    });
    this.dataCountries.map(e => e.states).flat().map(e => e.rivers).flat()
    //this.selectedPlace.rivers.forEach(element => {
    this.dataCountries.map(e => e.states).flat().map(e => e.rivers).flat().forEach(element => {
      this.markCreate(element.lng, element.lat, element.name, element.size, element.lastChecked, element.quality, element.mainSubstances);
    });
  }

  ngOnDestroy(): void {
    localStorage.removeItem('dataMap');
  }

  markCreate(longitude: number, latitude: number, riverName: string, size: number, lastChecked: string, quality: number, mainSubstances: string[]): void {
    const marker = new Mapboxgl.Marker({
      color: "#b07219",
      draggable: false
    })
      .setLngLat([longitude, latitude])
      .setPopup(
        new Mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            `<div style="background-color: #acd8ea; margin: -15px; padding: 15px; contain: paint;">
            <div class="river-data">
                <div class="river-name">
                <h1 style="font-family: 'Roboto'; color: darkslateblue;" >${riverName}</h1>
                </div>
                <div style="line-height: 0.5;font-family: 'Roboto'" >
                    <p style="font-size: larger; font-weight: 500; line-height: normal;">River size: <span style="font-weight: 300;">${size} km</span></p>
                    <p style="font-size: larger; font-weight: 500; line-height: normal;">Last Checked:<span style="font-weight: 300;">${lastChecked}</span></p>
                    <p style="font-size: larger; font-weight: 500; line-height: normal;">Main subtances founded: <span style="font-weight: 300;">${mainSubstances.toString().replace(/,/g, ', ')}</span></p>
                   
                    <p style="font-size: larger; font-weight: 500;">Water quality:</p>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    ${this.checkWaterQuality(quality)}
                    <img src="../../assets/images/level-water-quality.svg" height="30" width="300" alt="">
                </div>
            </div>            
        </div>
            `
          )
      )
      .addTo(this.map);

    marker.on('drag', () => {
      console.log(marker.getLngLat())
    })
  }

  getMainSubtances(mainSubstances: string[]): string {
    return ''
  }

  checkWaterQuality(quality: number) {
    switch (quality) {
      case 0:
        return `<span class="material-icons md-16 low-quality" style="color: darkblue;position: relative;left: -85px;">room</span>`;
      case 1:
        return `<span class="material-icons md-16 low-quality" style="color: darkblue;position: relative;left: 0px;">room</span>`;
      case 2:
        return `<span class="material-icons md-16 low-quality" style="color: darkblue;position: relative;left: 85px;">room</span>`;
      default:
        return null
    }
  }

}
