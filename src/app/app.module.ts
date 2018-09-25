import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contact.component';
import { CombinationComponent } from './combinations/combinations.component';

@NgModule({
  declarations: [
    AppComponent,
    CombinationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
