import { Directive, HostListener, Input } from '@angular/core';

@Directive({ selector: '[rotate]' })
export class RotateImageDirective {
  @Input()
  public steps = '10';
  @Input()
  public rotate: string = '0';

  @HostListener('click') rotateImage() {
    console.log('rotate ', this.steps);
    console.log('rotate initial ', this.rotate);
  }

  constructor() {
    console.log('rotate pipe');
  }
}
