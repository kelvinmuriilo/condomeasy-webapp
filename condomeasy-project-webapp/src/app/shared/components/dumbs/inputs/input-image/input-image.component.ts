import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.css'],
})
export class InputImageComponent implements OnInit {
  @Input() placeholder: string;
  @Input() label: string;
  @Input() control: FormControl;
  @Input() identifier: string;
  @Input() appearance: string;
  @Input() name: string;
  @Output() changeEmit: EventEmitter<File[]> = new EventEmitter<File[]>();

  constructor() {}

  ngOnInit(): void {}

  bindChange(files: File[]): void {
    if (files) {
      this.changeEmit.emit(files);
    }
  }
}
