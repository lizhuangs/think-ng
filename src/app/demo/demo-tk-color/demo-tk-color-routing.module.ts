import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoTkColorComponent } from './demo-tk-color.component';
const routes: Routes = [
  { path: 'demo-tk-color', component: DemoTkColorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoTkColorRoutingModule { }
