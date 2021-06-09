import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.css'],
})
export class InputTextAreaComponent implements OnInit {
  value: string;
  @Input() placeholder: string;
  @Input() control: FormControl;
  @Input() type?: string = 'text';
  @Input() identifier: string;
  @Input() errorMessage: string;
  @Input() mask?: string;
  @Input() thousandSeparator?: string;
  @Input() label: string = '';
  @Input() appearance: string = 'outline';
  @Input() suffix: string = '';
  @Input() prefix: string = '';

  @Output() changeValue: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onKeyUp(value: string): void {
    this.value = value;
    this.changeValue.emit(this.value);
  }
}
