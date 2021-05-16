import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input() placeholder: string;
  @Input() control: FormControl;
  @Input() type?: string = 'text';
  @Input() isInvalid: boolean;
  @Input() identifier: string;

  constructor() { }

  ngOnInit(): void {
  }

}
