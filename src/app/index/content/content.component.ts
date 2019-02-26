import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  title = 'think-ng';
  user: { username: string };
  constructor() { }
  ngOnInit() {
    this.user = { username: 'Semlinker' };
  }

}
