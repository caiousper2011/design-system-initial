import { Component } from '@angular/core';
// import { ButtonDirective } from './button.directive';

@Component({
  // selector: 'button[cba-button]',
  selector: 'app-button',
  standalone: true,
  // imports: [],
  // template: '<ng-content (click)="logClick()"></ng-content>',
  template: '<button (click)="logClick()">Aqui</button>',
  styleUrl: './button.component.css',
  // hostDirectives: [
  //   {
  //     directive: ButtonDirective,
  //     inputs: ['disable'],
  //   },
  // ],
})
export class ButtonComponent {
  logClick(): void {
    console.log('clicou');
  }
}
