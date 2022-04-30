import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceCountryService } from 'src/app/service/service-country.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent {
  @Output() addNewQuizEvent = new EventEmitter();
  @Input() listItem: any;
  @Input() currentCountry: any ;
  @Input() countSelect!: number;
  @Input() index:number = 0
  @Input() correctAnswer!:number;

   letterArr: string[] = ['A', 'B', 'C', 'D']
   isTrue:boolean | null = null; 

  constructor(public serviceCountry: ServiceCountryService) {}

   
  handleClick(currentCountry:string, listItem:string) {
    if(this.countSelect > 0) return alert('next quiz country')
    this.countSelect++;
    if(currentCountry === listItem){
      this.isTrue = true;
      this.addNewQuizEvent.emit(this.isTrue);
    }else {
      this.isTrue = false;
      this.addNewQuizEvent.emit();
    }
  }
} 