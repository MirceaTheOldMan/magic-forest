import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PartyListComponent } from './party-list/party-list.component';
import { RulesComponent } from './rules/rules.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'party-list', component: PartyListComponent },
    { path: 'rules', component: RulesComponent },
    { path: '**', component: PageNotFoundComponent }
];
