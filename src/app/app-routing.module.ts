import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/sites/home/home.component';
import {SiteNotFoundComponent} from './components/sites/site-not-found/site-not-found.component';
import {DataSecurityComponent} from './components/sites/data-security/data-security.component';
import {ImpressComponent} from './components/sites/impress/impress.component';
import {ContactComponent} from './components/sites/contact/contact.component';
import {ReferencesComponent} from './components/sites/references/references.component';
import {TechnologiesComponent} from './components/sites/technologies/technologies.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'technologies', component: TechnologiesComponent},
    {path: 'references', component: ReferencesComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'impress', component: ImpressComponent},
    {path: 'data-security', component: DataSecurityComponent},
    {path: '**', component: SiteNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
