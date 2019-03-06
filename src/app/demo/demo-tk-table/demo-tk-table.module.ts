import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoTkTableRoutingModule } from './demo-tk-table-routing.module';
import { DemoTkTableComponent } from './demo-tk-table.component';

@NgModule({
  declarations: [
    DemoTkTableComponent
  ],
  imports: [
    CommonModule,
    DemoTkTableRoutingModule
  ]
})
export class DemoTkTableModule { }
