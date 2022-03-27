import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})

export class ServiceCountryService {
  countries = []
  COUNTRY_URL = 'https://restcountries.com/v2/all';
  constructor(private http: HttpClient) {
      
   }

    getCountries() {
      return this.http.get<any[]>(this.COUNTRY_URL);
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * (13 - 249 + 1)) + 1;
    }
}
