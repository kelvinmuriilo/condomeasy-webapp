import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent implements OnInit {
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
  @Input() readonly: boolean;

  @Output() changeValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  isInvalid(): boolean {
    return this.control.invalid && this.control.touched;
  }

  onKeyUp(value: string): void {
    this.value = value;
    this.changeValue.emit(this.value);
  }
}
