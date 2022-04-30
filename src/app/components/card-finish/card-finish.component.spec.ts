import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFinishComponent } from './card-finish.component';

describe('CardFinishComponent', () => {
  let component: CardFinishComponent;
  let fixture: ComponentFixture<CardFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFinishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
