import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css'],
})
export class InputSearchComponent implements OnInit {
  value: string;
  show: boolean;

  @Input() placeholder: string;
  @Input() control: FormControl;
  @Input() type?: string = 'text';
  @Input() identifier: string;
  @Input() errorMessage: string;
  @Input() mask?: string;
  @Input() thousandSeparator?: string;

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

  showInput(): void {
    this.show = !this.show;
  }
}
