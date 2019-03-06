import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: 'tk-table,[tk-table]'
})
export class TkTableDirective {
  @Input() data: any;
  @Input() options: any;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.setStyle('#fff');
  }

  @HostListener('click')
  onClick() {
    this.setStyle(this.options.bgColor);
  }

  private setStyle(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);
  }
}
