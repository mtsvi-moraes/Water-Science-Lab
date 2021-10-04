import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  public countriesData: any = [
    {
      id: 0,
      name: 'Brazil',
      states: [
        {
          name: 'Minas Gerais',
          rivers: [
            {
              name: 'Rio Uberaba',
              lng: '-47.994396',
              lat: '-19.726277',
              size: 386,
              lastChecked: 'Set 23, 2020, 11:42:48 AM',
              quality:1,
              mainSubstances: ['lead', 'chlorine' ]
            }
          ]
        },
        {
          name: 'Rio de Janeiro',
          rivers: [
            {
              name: 'Rio Sarapuí',
              lng: '-43.417702',
              lat: '-22.796180',
              size: 422,
              lastChecked: 'Oct 11, 2019, 04:33:10 PM',
              quality:0,
              mainSubstances: ['chlorine' ]
            }
          ]
        },
        {
          name: 'São Paulo',
          rivers: [
            {
              name: 'Rio Pinheiros',
              lng: '-46.73977136263471',
              lat: '-23.54074184193692',
              size: 86,
              lastChecked: 'Dec 12, 2020, 09:11:33 AM',
              quality:1,
              mainSubstances: ['chlorine', 'atrazine' ]
            },
            {
              name: 'Rio Tamanduateí',
              lng: '-46.626432918',
              lat: '-23.5515382',
              size: 116,
              lastChecked: 'Dec 6, 2020, 10:42:48 PM',
              quality:0,
              mainSubstances: ['lead', 'atrazine' ]
            },
            {
              name: 'Rio Tiete',
              lng: '-46.775172451750365',
              lat: '-23.52261216718128',
              size: 863,
              lastChecked: 'Dec 8, 2020, 03:25:20 PM',
              quality:0,
              mainSubstances: ['chlorine', 'atrazine', 'oil', 'pesticides' ]
            },
          ]
        }
      ]
    },
    {
      id: 1,
      name: 'China',
      states: [
        {
          name: 'Beijing',
          rivers: [
            {
              name: 'Chaobai River',
              lng: '116.676308',
              lat: '40.192558',
              size: 297,
              lastChecked: 'Jan 12, 2021, 08:42:48 AM',
              quality:2,
              mainSubstances: ['chlorine', 'lead', 'pesticides' ]
            }
          ]
        },
        {
          name: 'Guangzhou',
          rivers: [
            {
              name: 'Zhuujiang River',
              lng: '113.184603',
              lat: '23.230444',
              size: 1123,
              lastChecked: 'Feb 22, 2021, 01:11:46 PM',
              quality:1,
              mainSubstances: ['chlorine' ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'United States',
      states: [
        {
          name: 'California',
          rivers: [
            {
              name: 'Rio San Joaquin',
              lng: '-121.372614',
              lat: '37.970439',
              size: 593,
              lastChecked: 'Jun 7, 2019, 07:33:51 PM',
              quality:2,
              mainSubstances: []
            }
          ]
        },
        {
          name: 'Whashington',
          rivers: [
            {
              name: 'Rio Pomac',
              lng: '-77.017732',
              lat: '38.785187',
              size: 456,
              lastChecked: 'Jun 12, 2019, 09:17:36 AM',
              quality:2,
              mainSubstances: []
            }
          ]
        }
      ]
    }
  ]

  queryRegionForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {

    this.queryRegionForm = this.formBuilder.group({
      countryFormControl: new FormControl('', [
        Validators.required
      ]),
      stateFormControl: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  selectCities(country: string): Array<string> {
    return this.queryRegionForm.value.countryFormControl ? this.countriesData.find(e => e.name == this.queryRegionForm.value.countryFormControl).states : [''];
  }

  searchRegion() {
    this.queryRegionForm.controls.countryFormControl.markAsDirty();
    this.queryRegionForm.controls.stateFormControl.markAsDirty();
    localStorage.setItem('dataMap', JSON.stringify(this.countriesData));
    if(this.queryRegionForm.valid){
      this.router.navigate(['rivers'], { queryParams: { country: this.queryRegionForm.value.countryFormControl, state: this.queryRegionForm.value.stateFormControl  }})
      
    }
  }

}
