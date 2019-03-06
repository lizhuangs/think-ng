import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { IndexModule } from './page/index/index.module';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { TkTableDirective } from './common/tk-table/tk-table.directive';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    AppComponent,
    IndexComponent,
    TkTableDirective
  ],
  imports: [
    BrowserModule,
    IndexModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
