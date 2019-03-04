import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DemoMtTableRoutingModule} from './demo-mt-table-routing.module';
import {DemoMtTableComponent} from './demo-mt-table.component';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    DemoMtTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    DemoMtTableRoutingModule
  ]
})
export class DemoMtTableModule {
}
