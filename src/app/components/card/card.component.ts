import { Component,  OnInit } from '@angular/core';
import {ServiceCountryService} from "../../service/service-country.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  countries: any[] = [];
  countriesList: any[] = []; 
  currentCountry: any  = "";
  countSelect:number = 0;
  countAnswer:number = 1;
  arrQuiz:string[] = [' is the capital of', 'Which country does this flag belong to?']
  currentQuiz: string = this.arrQuiz[0];
  correctAnswer:number = 0;

  constructor(public serviceCountry: ServiceCountryService) {
  }

  ngOnInit(): void {
    this.serviceCountry.getCountries().subscribe((data) => {
      this.countries = data;
    } );
    if(this.countries.length > 0) {
      this.getCountriesByRandomNumber();
    }
  }

 ngAfterViewInit() {
    setTimeout(() => {
    this.getCountriesByRandomNumber()
    }, 1000);
  }
  
  getCountriesByRandomNumber() {
    this.serviceCountry.generateRandomNumbers().map(i => {
      this.countriesList.push(this.countries[i])
    })
    this.currentCountry = this.countriesList[this.serviceCountry.getSingleRandomNumber()];
  }


/* validate if user selected answer */
  addNewQuiz(n:boolean) {
    this.countSelect++;
      if(n) {
        this.correctAnswer++;
      }
  }
 
  tryAgain() {
    this.countAnswer = 1;
    this.correctAnswer = 0;
    this.countSelect = 0;
    this.countriesList = [];
    this.getCountriesByRandomNumber();
  }

  handleNextQuiz() {
    this.countriesList = [];
    this.getCountriesByRandomNumber();
    this.currentQuiz = this.arrQuiz[Math.floor(Math.random() * 2)];
    this.countSelect = 0;
    this.handleFinishQuiz();
  }

  handleFinishQuiz() {
    this.countAnswer++;
  }
  
}
