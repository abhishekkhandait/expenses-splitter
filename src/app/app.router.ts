import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './home/shared/card/card.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent, },
    { path: 'home', component: HomeComponent, },
    { path: 'dashboard', component: DashboardComponent, }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [
        HomeComponent,
        DashboardComponent,
        CardComponent],
    exports: [RouterModule, CardComponent]
})
export class AppRoutingModule { }