import { Component, OnInit } from '@angular/core';
import { ServiceCountryService } from 'src/app/service/service-country.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {

  constructor(private serviceCountry: ServiceCountryService) {
   }


  ngOnInit(): void {
  this.serviceCountry.getCountries().subscribe((res => console.log(res)))
  }

}
