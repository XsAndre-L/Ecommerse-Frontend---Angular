import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() type: string = "text";
  @Input() placeholder: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
