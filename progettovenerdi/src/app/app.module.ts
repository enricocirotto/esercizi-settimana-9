import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router'; // route

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JumboComponent } from './components/jumbo/jumbo.component';
import { EvidenzaComponent } from './components/evidenza/evidenza.component';
import { AudiComponent } from './components/audi/audi.component';
import { ErroreComponent } from './components/errore/errore.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { FordComponent } from './components/ford/ford.component';

const routes: Route[] = [  //route

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'audi',
    component: AudiComponent
  },

  {
    path: 'ford',
    component: FordComponent
  },

  {
    path: 'fiat',
    component: FiatComponent
  },

  {
    path: 'error404',
    component: ErroreComponent
   },
  {
    path: '**',
    redirectTo: "error404"
   },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    JumboComponent,
    EvidenzaComponent,
    AudiComponent,
    ErroreComponent,
    FiatComponent,
    FordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) //route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
