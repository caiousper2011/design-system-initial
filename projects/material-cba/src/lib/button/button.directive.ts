import {
  Directive,
  Input,
  OnInit,
  Renderer2,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[cbaButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit {
  @Input() desabilitar: boolean = false;
  @Input() elevation!: number;
  @Input() color!: string;
  @Input() shape: string = 'flat';

  protected _elementClass: string[] = [];

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, 'base');
    this.renderer.addClass(this.element.nativeElement, this.shape);

    if (this.elevation) {
      this.renderer.addClass(
        this.element.nativeElement,
        `elevation-${this.elevation}`
      );
    }

    if (this.color) {
      this.renderer.addClass(this.element.nativeElement, this.color);
    }
  }

  @Input('class')
  @HostBinding('class')
  get elementClass(): string {
    return this._elementClass.join(' ');
  }
  set(val: string) {
    this._elementClass = val.split(' ');
  }
}
