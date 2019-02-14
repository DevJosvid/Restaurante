import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { CreateComponent } from './components/restaurante/create/create.component';
import { FindComponent } from './components/restaurante/find/find.component';
import { UpdateComponent } from './components/restaurante/update/update.component';
import { DeleteComponent } from './components/restaurante/delete/delete.component';
import { Error404Component } from './components/error404/error404.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavDashboardComponent } from './components/nav-dashboard/nav-dashboard.component';
import { NavLoginComponent } from './components/nav-login/nav-login.component';

import { app_routing } from './routes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CreateComponent,
    FindComponent,
    UpdateComponent,
    DeleteComponent,
    Error404Component,
    DashboardComponent,
    NavDashboardComponent,
    NavLoginComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
