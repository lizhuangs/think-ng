import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoTkColorRoutingModule } from './demo-tk-color-routing.module';
import { DemoTkColorComponent } from './demo-tk-color.component';

@NgModule({
  declarations: [
    DemoTkColorComponent
  ],
  imports: [
    CommonModule,
    DemoTkColorRoutingModule
  ]
})
export class DemoTkColorModule { }
