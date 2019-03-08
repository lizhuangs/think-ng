import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoDirectiveRoutingModule } from './demo-directive-routing.module';
import { DemoDirectiveComponent } from './demo-directive.component';
import { DemoDirective } from './demo.directive';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DemoDirectiveComponent,
    DemoDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DemoDirectiveRoutingModule
  ]
})
export class DemoDirectiveModule { }
