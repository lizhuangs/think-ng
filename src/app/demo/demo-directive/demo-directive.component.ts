import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.css']
})
export class DemoDirectiveComponent implements OnInit, AfterViewInit {
  @ViewChild('myDiv') myDiv: ElementRef;
  @ViewChild('myDiv2') myDiv2: ElementRef;
  color = 'blue';
  constructor(private ele: ElementRef, private renderer: Renderer2) {
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.myDiv.nativeElement.style.backgroundColor = 'red';
    this.renderer.setStyle(this.myDiv2.nativeElement, 'backgroundColor', 'green');
  }

}
