import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';
import { ArrayUniquePipe } from '../pipes/array-unique.pipe';

interface zipcode {
  country: string,
  state: string,
  city: string,
  district: string,
  area: string,
  zipcode: string
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})


export class AddressComponent implements OnInit {

  country: string;
  state: string;
  city: string;

  countries : Array<string>;
  states: Array<string>;
  cites: Array<string> = ['Select'];

  countryStates: any;

  regions: Array<zipcode> = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCountryStateData().subscribe(( response: Array<zipcode> )=> {
      this.countryStates = response;
      this.countries = this.countryStates.map((item: zipcode) => item.country);
      this.states = this.countryStates.map((item: zipcode) => item.state);
      this.countries = this.countries.filter((item: string, index: number )=> {
        return (this.countries.indexOf(item)==index)
      });
    })
  }


  getCountryStateList(name: string) {
    this.country = name
  }

  getStateCityList(name: string) {
    this.state = name;
    this.data.getCountryStateCities(this.country, this.state).subscribe((cites: Array<string>)=>{
      this.cites = cites
    })
  }

  checkCountryStateCity(name: string) {
    this.city = name;
  }


  getAddress () {
    if (!this.country || !this.state || this.city) {
      console.log('Please select country, state and city');  
    }
    this.data.getCountryStateCityZip(this.country, this.state, this.city).subscribe((resp: Array<zipcode>) =>{
      this.regions = resp;
    })
  }
}
