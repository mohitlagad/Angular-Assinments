import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el : ElementRef) 
  {
    el.nativeElement.style.backgroundColor = 'yellow'

    el.nativeElement.style.fontWeight = 'bold'
   }

}
