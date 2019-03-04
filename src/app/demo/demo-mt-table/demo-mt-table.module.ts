import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DemoMtTableRoutingModule} from './demo-mt-table-routing.module';
import {DemoMtTableComponent} from "./demo-mt-table.component";

@NgModule({
  declarations: [
    DemoMtTableComponent
  ],
  imports: [
    CommonModule,
    DemoMtTableRoutingModule
  ]
})
export class DemoMtTableModule {
}
