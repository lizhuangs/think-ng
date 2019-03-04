import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-template',
  templateUrl: './demo-template.component.html',
  styleUrls: ['./demo-template.component.css']
})
export class DemoTemplateComponent implements OnInit {
  title = 'think-ng';
  user: { username: string };
  constructor() { }
  ngOnInit() {
    this.user = { username: 'Semlinker' };
  }

}
