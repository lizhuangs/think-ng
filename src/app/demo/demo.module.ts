import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoRoutingModule} from './demo-routing.module';
import {DemoComponent} from './demo.component';
import {DemoTemplateModule} from './demo-template/demo-template.module';
import {DemoMtTableModule} from './demo-mt-table/demo-mt-table.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoTemplateModule,
    DemoMtTableModule,
    DemoRoutingModule
  ]
})
export class DemoModule {
}
