import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contact.component';
import { CombinationComponent } from './combinations/combinations.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AuthenticationService } from './_services';
import { AuthGuard } from './_guards';

@NgModule({
  declarations: [
    AppComponent,
    CombinationComponent,
    ContactComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
