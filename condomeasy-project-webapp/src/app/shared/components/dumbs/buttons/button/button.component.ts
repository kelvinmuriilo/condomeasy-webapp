import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() className: string;
  @Input() name: string;
  @Input() identifier: string;
  @Input() type: string;
  @Input() fontIcon?: string;

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  clickEvent(): void {
    this.onClick.emit();
  }
}
