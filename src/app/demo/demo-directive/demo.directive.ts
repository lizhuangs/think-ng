import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[demo-dt]'
})
export class DemoDirective {
  defaultBgColor = 'gray';
  @Input('options') options: any;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(this.options);
    let obj = { bgColor: 'red' };
    let str = JSON.stringify(obj);
    console.log(str);
    let a = JSON.parse(str);
    console.log(a.bgColor);
    this.setStyle(this.defaultBgColor);
  }

  private setStyle(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.defaultBgColor);
  }

  @HostListener('click')
  onclick() {
    this.setStyle(this.options.bgColor);
  }
}
