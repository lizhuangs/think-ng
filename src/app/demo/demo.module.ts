import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoRoutingModule} from './demo-routing.module';
import {DemoComponent} from './demo.component';
import {DemoTemplateModule} from './demo-template/demo-template.module';
import {DemoMtTableModule} from './demo-mt-table/demo-mt-table.module';
import { DemoTkTableModule } from './demo-tk-table/demo-tk-table.module';
import { DemoDirectiveModule } from './demo-directive/demo-directive.module';
import { DemoTkColorModule } from './demo-tk-color/demo-tk-color.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoTemplateModule,
    DemoMtTableModule,
    DemoRoutingModule,
    DemoTkTableModule,
    DemoDirectiveModule,
    DemoTkColorModule
  ]
})
export class DemoModule {
}
