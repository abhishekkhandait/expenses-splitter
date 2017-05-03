import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app.router';
import { NavComponent } from './core/nav/nav.component';

import { HomeComponent } from './home/home.component';
import { CardComponent } from './home/shared/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { Tenant } from './models/tenant.model'

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent, },
    { path: 'dashboard', component: DashboardComponent, }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    // AppRoutingModule
    HomeComponent,
    CardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
