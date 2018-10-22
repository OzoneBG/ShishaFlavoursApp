import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { CombinationComponent } from './combinations/combinations.component';

import { AuthGuard, NotAuthGuard } from './_guards';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/combinations', pathMatch: 'full' },
    { path: 'combinations', component: CombinationComponent },
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },

    //Otherwise redirect to home
    { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);