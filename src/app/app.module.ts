import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultilineEllipsisModule } from './multiline-ellipsis';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MultilineEllipsisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
