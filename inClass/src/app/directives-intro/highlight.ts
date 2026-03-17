import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false,
})
export class Highlight {
  @Input() appHighlight = 'yellow';
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    console.log(this.el)
  }

  @HostListener('mouseenter')
  onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appHighlight)
  }
  @HostListener('mouseleave')
  onRemove() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color')
  }
  
}
