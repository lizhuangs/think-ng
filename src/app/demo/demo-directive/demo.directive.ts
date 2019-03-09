import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[demo-dt]'
})
export class DemoDirective {
  defaultBgColor = 'gray';
  // 可以取别名@Input('bgColor')
  // 注意bgColor的值对应DemoDirectiveComponent中的color，不能直接在html页面传值
  @Input() bgColor: string;
  number = 0;

  // Directive的constructor要晚于组件，但是却取不到@Input的值，可能是构造完成后才能注入吧
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle(this.defaultBgColor);
  }

  private setStyle(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
    // this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('click')
  onClick() {
    this.setStyle(this.bgColor);
  }

  @HostListener('mouseenter', ['$event.target'])
  onClick2(btn) {
    console.log('', this.number++);
    // console.log('button', btn, 'number of mouseenter:', this.number++);
  }
}
