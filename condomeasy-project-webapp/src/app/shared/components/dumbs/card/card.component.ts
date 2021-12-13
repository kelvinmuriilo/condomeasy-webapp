import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() price: number;
  @Input() date: string;
  @Input() userFirstName?: string;
  @Input() userLastName?: string;
  @Input() description: string;
  @Input() imgPath?: string;
  @Input() category: string;

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  showImage(): boolean {
    return this.imgPath !== undefined;
  }

  isACombinar(): boolean {
    return this.price === null || this.price < 1;
  }

  bindClick(): void {
    this.onClick.emit();
  }
}
