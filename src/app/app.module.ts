import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgCardAnimatedComponent } from './card/ng-card-animated/ng-card-animated.component';
//import { CardModule } from './card/card.module';


@NgModule({
  declarations: [
    AppComponent,
    NgCardAnimatedComponent
  ],
  imports: [
    BrowserModule,
    //CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
