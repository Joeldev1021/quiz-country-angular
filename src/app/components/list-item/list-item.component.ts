import { Component, Input } from '@angular/core';
import { ServiceCountryService } from 'src/app/service/service-country.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent {
  @Input() listItem: any;
  @Input() color!: string;
  @Input() currentCountry: any ;
  @Input() count!: number;
  @Input() index:number = 0
   letterArr: string[] = ['A', 'B', 'C', 'D']
   isTrue:boolean | null = null; 
   isSelect:string = '';


  constructor(public serviceCountry: ServiceCountryService) {}

   
  handleClick(currentCountry:any, listItem:any) {
    if(this.count > 0) return alert('next quiz country')
    if(currentCountry == listItem){
      this.isTrue = true;
      this.isSelect = '#60BF88'
    }else {
      this.isTrue = false;
      this.isSelect = '#EA8282'
    }
  }
} 