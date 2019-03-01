import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../data.service';
import { AddressComponent } from '../address/address.component';

interface zipcode {
  country: string,
  state: string,
  city: string,
  district: string,
  area: string,
  zipcode: string
}

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {

  address: string = '';
  zipcodeError:string = '';

  regions: Array<zipcode>= [];
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  getZip(__zipcode:string) {
    let pattern:RegExp = /^[1-9]{1}[0-9]{5}$/;
    if (!pattern.test(__zipcode)) {
      this.zipcodeError = "Invalid Zipcode";
      this.address = '';
      return;
    } else {
      this.zipcodeError = "";
    }
    let adr: any = this.data.getAddressByZipcode(__zipcode).subscribe((resp: Array<zipcode>) => {
      this.regions = resp;
    });
  }
}
