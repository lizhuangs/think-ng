import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './left/left.component';
import { TopComponent } from './top/top.component';
import { FootComponent } from './foot/foot.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    LeftComponent,
    TopComponent,
    FootComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LeftComponent,
    TopComponent,
    FootComponent,
    ContentComponent
  ]
})
export class IndexModule { }
