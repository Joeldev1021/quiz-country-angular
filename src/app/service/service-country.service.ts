import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceCountryService {
  randomNumber:number = 0;
  arrNumber:number[] = [];
  newArr: any[] = [];
  private COUNTRY_URL = 'https://restcountries.com/v2/all';

  constructor(private http: HttpClient) {}

   getCountries(): Observable<any> {
      return this.http.get<any[]>(this.COUNTRY_URL)
    }
    getRandomNumber() {
      /* random number 0 to 249 */
      return Math.floor(Math.random() * 250);
    }

    generateRandomNumbers() {
      for (let i = 0; i < 4; i++) {
        if(!this.arrNumber.includes(this.getRandomNumber())) {
        this.arrNumber[i] = this.getRandomNumber();
        }else {
          i--;
        }
      }
      return this.arrNumber;
    }

    getCountriesByRandomNumber(countries: any) {
      console.log(countries)
    }
    
    getSingleRandomNumber() {
     return Math.floor(Math.random() * 4) 
    }
}
