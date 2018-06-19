import { HostListener, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  element: ElementRef;
  isOver = false;

  constructor(el: ElementRef) {
    this.element = el;
  }

  @HostListener('mouseleave') mouseLeave() {
    //  console.log('enter div');
     this.isOver = false;
    //  this.element.nativeElement.style.overflowY = 'hidden';
    //  window.scroll();
  }

  // @HostListener('scroll') scrollCustom() {
    // console.log('scroll div');
    // window.scroll(null, null);
//  }

  @HostListener('mouseenter') mouseEnter() {
    // console.log('out div');
    this.isOver = true;
    // this.element.nativeElement.style.overflowY = 'auto';
    // this.element.nativeElement.style.zindex = 5000;
    // window.scroll(null, null);
 }

 @HostListener('window:scroll') scroll() {
    // console.log('noooo');
    if (this.isOver) {
      window.scroll(null, null);
    }
    // window.scroll(null, null);
 }
}
