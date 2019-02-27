import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoTemplateRoutingModule } from './demo-template-routing.module';
import { DemoTemplateComponent } from './demo-template.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DemoTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoTemplateRoutingModule
  ]
})
export class DemoTemplateModule { }
