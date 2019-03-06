import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoTkTableComponent } from './demo-tk-table.component';

const routes: Routes = [
  { path: 'demo-tk-table', component: DemoTkTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoTkTableRoutingModule { }
