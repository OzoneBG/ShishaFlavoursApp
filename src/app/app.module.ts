import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contact.component';
import { MyCombinationsComponent } from './my-combinations/my-combinations.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AuthenticationService } from './_services';
import { AuthGuard, NotAuthGuard } from './_guards';

@NgModule({
  declarations: [
    AppComponent,
    MyCombinationsComponent,
    ContactComponent,
    NavigationBarComponent,
    LoginComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthenticationService,
    AuthGuard,
    NotAuthGuard,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
