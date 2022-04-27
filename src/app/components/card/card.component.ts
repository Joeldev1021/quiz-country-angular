import { Component,  OnInit } from '@angular/core';
import {ServiceCountryService} from "../../service/service-country.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  countries: any[] = [];
  randomNumbers: number[] = [];
  countriesList: any[] = []; 
  currentCountry: any  = "";
  singleNumber: number = 0;
  count:number = 0;

  constructor(public serviceCountry: ServiceCountryService) {
  }

  ngOnInit(): void {
    this.serviceCountry.getCountries().subscribe((data) => {
      this.countries = data;
    } );
    this.randomNumbers = this.serviceCountry.generateRandomNumbers();
    this.singleNumber = this.serviceCountry.getSingleRandomNumber();
  }

  ngAfterViewInit() {
    setTimeout(() => {
    this.getCountriesByRandomNumber()
    }, 1000);
  }

  getCountriesByRandomNumber() {
    this.randomNumbers.map(i => {
      this.countriesList.push(this.countries[i]);
      console.log(this.countriesList)
    })
   this.currentCountry = this.countriesList[this.singleNumber];
  }

  handleCount() {
    this.count++
  } 

  handleNextQuiz() {
    this.countriesList = [];
    this.randomNumbers = this.serviceCountry.generateRandomNumbers();
    this.singleNumber = this.serviceCountry.getSingleRandomNumber();
    this.getCountriesByRandomNumber();
    this.count = 0;
  }
  
}
