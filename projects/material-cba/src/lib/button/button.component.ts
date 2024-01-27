import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonDirective } from './button.directive';

@Component({
  selector: 'button[cba-button]',
  standalone: true,
  imports: [ButtonDirective],
  template: '<ng-content></ng-content>',
  styleUrl: './button.component.scss',
  hostDirectives: [
    {
      directive: ButtonDirective,
      inputs: ['desabilitar', 'elevation', 'color', 'shape'],
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {}
