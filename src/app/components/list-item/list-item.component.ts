import { Component, Input } from '@angular/core';
import { ServiceCountryService } from 'src/app/service/service-country.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent  {

  constructor(public serviceCountry: ServiceCountryService) {}
  
   
  onSelect(n: string) {
    console.log(n)
  }
} 