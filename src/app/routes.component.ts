import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateComponent } from './components/restaurante/create/create.component';
import { RegisterComponent } from './components/users/register/register.component';

const app_routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'restaurant', component: CreateComponent },
    { path: 'user', component: RegisterComponent}
];

export const app_routing = RouterModule.forRoot(app_routes);