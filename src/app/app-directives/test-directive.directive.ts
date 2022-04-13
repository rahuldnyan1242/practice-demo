import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private element: ElementRef, private render: Renderer2) { 
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', '#ffccff')
  }

  changeBG(color) {
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', color)
  }

}
