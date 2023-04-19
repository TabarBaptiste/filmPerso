import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListFilmComponent } from './component/list-film/list-film.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { FavorisComponent } from './component/favoris/favoris.component';
import { FilmsVenirComponent } from './component/films-venir/films-venir.component';
import { GenreFilmsComponent } from './component/genre-films/genre-films.component';
import { AnneeComponent } from './component/annee/annee.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list', component: ListFilmComponent },
    { path: 'details/:id', component: MovieDetailsComponent },
    { path: 'favoris', component: FavorisComponent},
    { path: 'avenir', component: FilmsVenirComponent},
    { path: 'movie/:id', component: MovieDetailsComponent },
    { path: 'genre', component: GenreFilmsComponent },
    { path: 'annee', component: AnneeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }