import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './index/common/page-not-found/page-not-found.component';

const routes: Routes = [
  /* {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  }, */
  {
    path: 'crisis-center',
    loadChildren: './index/index.module#IndexModule'
    /* ,data: { preload: true } 配合SelectivePreloadingStrategy使用*/
  },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // ,{ enableTracing: true } // debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
