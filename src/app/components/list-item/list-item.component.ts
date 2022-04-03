import { Component, OnInit } from '@angular/core';
import { ServiceCountryService } from 'src/app/service/service-country.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {
   
  constructor(public serviceCountry: ServiceCountryService) {

   }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.serviceCountry.getCountries().subscribe(
      (res) => {
        this.serviceCountry.countries = res
        this.getRandomCountry()
      },
      (err) => console.log(err)
    );
  }
   
   getCurrentCountry() {
      this.serviceCountry.singleCountry = this.serviceCountry.getSingleRandomNumber()  
   }
   getRandomCountry() {
    this.serviceCountry.generateRandomNumbers().map(n => {
     this.serviceCountry.arrCountry.push(this.serviceCountry.countries[n])
    })
   }
} 