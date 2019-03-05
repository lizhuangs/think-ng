import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeftComponent} from './left/left.component';
import {TopComponent} from './top/top.component';
import {FootComponent} from './foot/foot.component';
import {ContentComponent} from './content/content.component';
import {PageNotFoundComponent} from './common/page-not-found/page-not-found.component';
import {IndexRoutingModule} from './index-routing.module';
import {ContentRoutingModule} from './content/content-routing.module';
import {TkDialogComponent} from './common/tk-dialog/tk-dialog.component';
import {TkTableComponent} from './common/tk-table/tk-table.component';
import {DemoModule} from '../../demo/demo.module';
import {UserModule} from '../user/user.module';
import {AdminModule} from '../../admin/admin/admin.module';

@NgModule({
  declarations: [
    LeftComponent,
    TopComponent,
    FootComponent,
    ContentComponent,
    PageNotFoundComponent,
    TkDialogComponent,
    TkTableComponent
  ],
  imports: [
    CommonModule,
    /*1、引用了module就可以不引用路由，但是路由必须在引用的module中存在才可以跳转进去
    2、可以没有module，通过路由也可以直接跳转进去 */
    AdminModule,
    DemoModule,
    UserModule,
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
export class IndexModule {
}
