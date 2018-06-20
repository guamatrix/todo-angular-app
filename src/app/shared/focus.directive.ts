import { Directive, ElementRef, Renderer, AfterViewInit } from '@angular/core';


@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements AfterViewInit {
  constructor(private element: ElementRef, private renderer: Renderer) {}

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.element.nativeElement, 'focus');
  }
}
