import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './left/left.component';
import { TopComponent } from './top/top.component';
import { FootComponent } from './foot/foot.component';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './common/page-not-found.component';
import { IndexRoutingModule } from './index-routing.module';
import { DemoComponent } from './demo/demo.component';
import { DemoTemplateComponent } from './demo/demo-template/demo-template.component';
import { ContentRoutingModule } from './content/content-routing.module';
import { DemoModule } from './demo/demo.module';

@NgModule({
  declarations: [
    LeftComponent,
    TopComponent,
    FootComponent,
    ContentComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    ContentRoutingModule,
    IndexRoutingModule
  ],
  exports: [
    LeftComponent,
    TopComponent,
    FootComponent,
    ContentComponent
  ]
})
export class IndexModule { }
