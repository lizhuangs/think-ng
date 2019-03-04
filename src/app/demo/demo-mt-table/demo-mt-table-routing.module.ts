import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DemoTemplateComponent} from "../demo-template/demo-template.component";
import {DemoMtTableComponent} from "./demo-mt-table.component";

const routes: Routes = [
  {path: 'demo-mt-table', component: DemoMtTableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoMtTableRoutingModule {
}
