import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {
@HostBinding ('style.backgroundColor') bgColor ="white"
@HostBinding ('style.color') col ="black"

@HostListener('mouseenter') mouseenter(){
  this.bgColor ="grey"
  this.col ="white"
}
@HostListener('mouseleave') mouseleave(){
  this.bgColor ="white"
  this.col ="black"
}

  constructor() { }

}
