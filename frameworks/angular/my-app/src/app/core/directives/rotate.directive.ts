import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({ selector: '[rotate]' })
export class RotateImageDirective implements OnInit {
  @Input()
  public steps: string;
  @Input()
  public rotate: string;

  private defaultSteps = '10';
  private defaultInitialRotate = '0';

  private capsLocked = false;

  @HostBinding('style.transform')
  public bindingTransform: string;

  @HostListener('click') rotateImage() {
    if (this.capsLocked) {
      this.rotate = (Number(this.rotate) - Number(this.steps)).toString();
    } else {
      this.rotate = (Number(this.rotate) + Number(this.steps)).toString();
    }
    this.bindingTransform = this.generateRotateProperty(this.rotate);
  }

  @HostListener('window:keydown.shift')
  handleKeyDown() {
    this.capsLocked = true;
  }

  @HostListener('window:keyup.shift')
  handleKeyUp() {
    this.capsLocked = false;
  }

  constructor() {
    console.log('rotate pipe');
  }

  public ngOnInit(): void {
    if (!this.steps) {
      this.steps = this.defaultSteps;
    }
    if (!this.rotate) {
      this.rotate = this.defaultInitialRotate;
    }
    this.bindingTransform = this.generateRotateProperty(this.rotate);
  }

  private generateRotateProperty(rotation: string) {
    return `rotate(${rotation}deg)`;
  }
}
