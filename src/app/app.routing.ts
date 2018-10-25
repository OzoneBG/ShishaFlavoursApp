import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { MyCombinationsComponent } from './my-combinations/my-combinations.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard, NotAuthGuard } from './_guards';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'my-combinations', component: MyCombinationsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
    { path: 'profile-settings', component: SettingsComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [NotAuthGuard]},

    //Otherwise redirect to home
    { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);