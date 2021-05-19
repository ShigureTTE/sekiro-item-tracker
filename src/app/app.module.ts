import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieProvider } from 'src/settings/cookies';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ITEM_DATA } from './models/item-data';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ITEM_DATA, CookieProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
