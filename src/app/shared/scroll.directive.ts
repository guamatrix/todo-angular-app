import { HostListener, Directive } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  private isOver = false;

  @HostListener('mouseleave') mouseLeave() {
     this.isOver = false;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.isOver = true;
 }

 @HostListener('window:scroll') scroll() {
    if (this.isOver) {
      window.scroll(null, null);
    }
 }
}
