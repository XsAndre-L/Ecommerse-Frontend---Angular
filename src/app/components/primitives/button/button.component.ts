import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() link: string = '';
  @Input() color: 'default' | 'red' | 'green' | 'blue' = 'default';
  @Input() state: 'disabled' | 'active' = 'active';

  constructor() {}

  ngOnInit(): void {}
}
