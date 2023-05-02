import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elementRef:ElementRef) { 

   //this.elementRef.nativeElement.style.backgroundColor="blue";

  }
@HostListener('mouseenter')
  onMouseEnter()
  {
    this.highLight("yellow");
  }
@HostListener('mouseleave')
 onMouseLeave()
 {
  this.highLight("");
 }
 highLight(color:string)
  {
      this.elementRef.nativeElement.style.backgroundColor=color;
 }
}
