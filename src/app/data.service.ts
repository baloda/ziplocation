import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface zipcode {
  country: string,
  state: string,
  city: string,
  district: string,
  area: string,
  zipcode: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) {
  }

  countryStateData: Array<object>;
  countryStateGroupData: Array<object>;

  getCountryStateData() {
    return this.http.get<Array<zipcode>>('http://localhost:3000/countryState');
  }
  getCountryStateCities(country: string, state: string) {
    return this.http.get<Array<string>>(`http://localhost:3000/countryStateCites?country=${country}&state=${state}`);
  }
  getCountryStateCityZip(country: string, state: string, city: string) {
    return this.http.get<Array<zipcode>>(`http://localhost:3000/zip?country=${country}&state=${state}&city=${city}`);
  }

  getAddressByZipcode(zipcode: string) {
    return this.http.get<Array<zipcode>>(`http://localhost:3000/getLocationByZipCode?zipcode=${zipcode}`);
  }
}
