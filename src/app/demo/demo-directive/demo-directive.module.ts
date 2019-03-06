import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoDirectiveRoutingModule } from './demo-directive-routing.module';
import { DemoDirectiveComponent } from './demo-directive.component';
import { DemoDirective } from './demo.directive';

@NgModule({
  declarations: [
    DemoDirectiveComponent,
    DemoDirective
  ],
  imports: [
    CommonModule,
    DemoDirectiveRoutingModule
  ]
})
export class DemoDirectiveModule { }
