import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[cbaButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit {
  @Input() disable: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log('chamou diretiva de botão');
  }
}
