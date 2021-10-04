import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-river-list',
  templateUrl: './river-list.component.html',
  styleUrls: ['./river-list.component.css']
})
export class RiverListComponent implements OnInit {
  region: any;
  countries: string[] = [
    'Brazil', 'China', 'Estados Unidos', 'Portugal'
  ];

  states: string[] = [
    'Amapá', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo' 
  ];

  queryRegionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {

    this.queryRegionForm = this.formBuilder.group({
      countryFormControl: new FormControl(''),
      stateFormControl: new FormControl('')
    });
  }


  ngOnInit() {

    this.route.queryParams
      .subscribe((elem: any) => {
        if (Object.keys(elem).length) {
          this.region = elem
          this.initForm();
        } else {
          this.router.navigate(['home']);
        }
      })
  }

  initForm() {

    this.queryRegionForm = this.formBuilder.group({
      countryFormControl: new FormControl(this.region.country),
      stateFormControl: new FormControl(this.region.state)
    });
  }


}
