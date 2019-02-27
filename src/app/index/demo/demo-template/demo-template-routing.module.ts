import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoTemplateComponent } from './demo-template.component';

const routes: Routes = [
  { path: 'demo-tpl', component: DemoTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoTemplateRoutingModule { }
