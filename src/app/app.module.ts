import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MarsroverComponent } from './marsrover/marsrover.component';
import { PicofdayComponent } from './picofday/picofday.component';
import { HomeComponent } from './home/home.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MarsroverComponent,
    PicofdayComponent,
    HomeComponent,
    AsteroidsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
