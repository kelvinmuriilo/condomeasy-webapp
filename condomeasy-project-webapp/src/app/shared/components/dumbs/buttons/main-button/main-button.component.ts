import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css'],
})
export class MainButtonComponent implements OnInit {
  @Input() className: string;
  @Input() name: string;
  @Input() identifier: string;
  @Input() type: string;
  @Input() isDisable: boolean;

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  clickEvent(): void {
    this.onClick.emit();
  }
}
