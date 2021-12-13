import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from './option.model';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css'],
})
export class InputSelectComponent implements OnInit {
  @Input() label: string;
  @Input() options: Option;
  @Input() appearance: string = 'outline';

  @Output() bindOption: EventEmitter<Option> = new EventEmitter<Option>();

  constructor() {}

  ngOnInit(): void {}

  bindValue(selectedOption: Option): void {
    this.bindOption.emit(selectedOption);
  }
}
