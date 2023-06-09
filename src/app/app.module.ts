import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { ListFilmComponent } from './component/list-film/list-film.component';
import { FavorisComponent } from './component/favoris/favoris.component';
import { FilmsVenirComponent } from './component/films-venir/films-venir.component';
import { FormsModule } from '@angular/forms';
import { GenreFilmsComponent } from './component/genre-films/genre-films.component';
import { AnneeComponent } from './component/annee/annee.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieDetailsComponent,
    ListFilmComponent,
    FavorisComponent,
    FilmsVenirComponent,
    GenreFilmsComponent,
    AnneeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
