import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { createLinkedSignal } from '@angular/core/primitives/signals';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow'
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { 
    console.log(this.el)
  }
  @HostListener('mouseenter')
    onMouseEnter(){
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appHighlight)
  }

  @HostListener('mouseleave')
    onMouseMove(){
      this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor')
    }
}
