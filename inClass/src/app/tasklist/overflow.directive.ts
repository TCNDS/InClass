import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOverflow]',
  standalone: false
})
export class OverflowDirective {
  @Input('appOverflow') fullText: string = '';
  private limit = 30;
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  onHover(){
    if (this.fullText && this.fullText.length > this.limit) {
      this.el.nativeElement.innerText = this.fullText.substring(0, this.limit) + '...';
    }
  }
  @HostListener('mouseleave')
  onLeave(){
    this.el.nativeElement.innerText = this.fullText;
  }
}
