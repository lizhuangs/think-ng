import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoDirectiveComponent } from './demo-directive.component';

const routes: Routes = [
  { path: 'demo-directive', component: DemoDirectiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoDirectiveRoutingModule { }
