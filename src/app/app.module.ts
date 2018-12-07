import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/sites/home/home.component';
import { ReferencesComponent } from './components/sites/references/references.component';
import { ContactComponent } from './components/sites/contact/contact.component';
import { TechnologiesComponent } from './components/sites/technologies/technologies.component';
import { ImpressComponent } from './components/sites/impress/impress.component';
import { DataSecurityComponent } from './components/sites/data-security/data-security.component';
import { SiteNotFoundComponent } from './components/sites/site-not-found/site-not-found.component';
import { MainNavigationComponent } from './components/general/navigation/main-navigation/main-navigation.component';
import { FooterComponent } from './components/general/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ReferencesComponent,
        ContactComponent,
        TechnologiesComponent,
        ImpressComponent,
        DataSecurityComponent,
        SiteNotFoundComponent,
        MainNavigationComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'de'
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
