import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Service
import {HeroesService} from './services/heroes.service';

// Routes
import {APP_ROUTING} from './app.routes';

// Components
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FinderComponent } from './components/finder/finder.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    FooterComponent,
    HeroeComponent,
    FinderComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
