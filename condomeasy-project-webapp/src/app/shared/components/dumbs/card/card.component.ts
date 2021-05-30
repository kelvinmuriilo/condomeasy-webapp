import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() price: number;
  @Input() date: string;
  @Input() userFirstName: string;
  @Input() userLastName: string;
  @Input() description: string;
  @Input() imgPath?: string;

  constructor() {}

  ngOnInit(): void {}
}
