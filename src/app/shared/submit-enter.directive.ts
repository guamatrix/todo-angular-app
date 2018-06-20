import { HostListener, Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appEnterClick]'
})

export class SubmitEnterDirective {
  // @Input() appSubmit: Function;
  @Output('appEnterClick') appEnterClick: EventEmitter<void> = new EventEmitter();

  @HostListener('keyup.enter') onkeypress(ev) {
    // this.appSubmit();
    this.appEnterClick.emit();
  }
}
