import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-finish',
  templateUrl: './card-finish.component.html',
  styleUrls: ['./card-finish.component.css']
})
export class CardFinishComponent implements OnInit {
  @Input() countAnswer!: number;
  @Input() correctAnswer!: number;
  @Output() tryAgain = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  btnTryAgain() {
    this.tryAgain.emit();
  }
   
}
