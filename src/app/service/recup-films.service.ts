import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film, Actor } from '../models/Film';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecupFilmsService {

  // Initialise le favo avec le contenu stocké dans le localStorage
  private favo: Film[] = JSON.parse(localStorage.getItem('favo') || '[]');
  // Initialise un BehaviorSubject avec le contenu du favo
  private favoSubject: BehaviorSubject<Film[]> = new BehaviorSubject<Film[]>(this.favo);

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des films populaires à partir de l'API TMDb
  getFilmsPopulaires(): Observable<Film[]> {
    return this.http.get(environment.apiBaseUrl + 'movie/popular?api_key=' + environment.keyAPI).pipe(map((resultat: any) => resultat.results));
  }

  // Méthode pour récupérer les détails d'un film à partir de l'API TMDb
  getDetailsFilm(id: number): Observable<any> {
    return this.http.get(environment.apiBaseUrl + `movie/${id}?api_key=` + environment.keyAPI);
  }

  getDetailsActeur(id: number): Observable<any> {
    return this.http.get(environment.apiBaseUrl + `person/${id}?api_key=` + environment.keyAPI);
  }

  getActeurByFilm(idFilm: number): Observable<Actor[]> {
    return this.http.get<Film>(environment.apiBaseUrl + `/movie/${idFilm}/credits?api_key=` + environment.keyAPI)
      .pipe(
        map((data: any) => data.cast),
      );
  }

  getFilmsByYear(year: number): Observable<Film[]> {
    return this.http.get<Film[]>(environment.apiBaseUrl + `/discover/movie?api_key=` + environment.keyAPI + `&language=fr-FR&sort_by=popularity.desc&primary_release_year=` + year)
    .pipe(
      map((annee: any) => annee.results),
    );
  }

  getDetailsImage(id: number): Observable<any> {
    return this.http.get(environment.apiBaseUrl + `image/${id}?api_key=` + environment.keyAPI);
  }

  // Méthode pour récupérer la liste des 4 films populaires à partir de l'API TMDb
  getQuatrePopulaires(): Observable<Film[]> {
    return this.http.get(environment.apiBaseUrl + 'movie/popular?api_key=' + environment.keyAPI)
      .pipe(
        map((resultat: any) => resultat.results.slice(0, 4))
      );
  }

  /*getFilms(): Observable<Film[]> {
    const url = `${environment.apiBaseUrl}movie/popular?api_key=${environment.keyAPI}&language=en-US&page=1`;
    return this.http.get<Film[]>(url);
  }

  searchFilms(query: string): Observable<Film[]> {
    const url = `${environment.apiBaseUrl}search/movie?api_key=${environment.keyAPI}&language=en-US&page=1&include_adult=false&query=${query}`;
    return this.http.get<Film[]>(url);
  }*/

  // Méthode pour récupérer la liste des films à venir à partir de l'API TMDb
  getFilmsAVenir(): Observable<Film[]> {
    return this.http.get(environment.apiBaseUrl + 'movie/upcoming?api_key=' + environment.keyAPI)
      .pipe(map((resultat: any) => resultat.results));
  }

  // Fonction qui ajoute un produit au panier
  ajouterFilmFavori(leFilm: Film): void {
    this.favo.push(leFilm);    // Ajoute le produit à la fin du tableau panier
    this.favoSubject.next(this.favo);    // Emet le nouveau contenu du panier aux abonnés (sous forme d'un BehaviorSubject)
    localStorage.setItem('favo', JSON.stringify(this.favo));    // Stocke le panier dans le localStorage
    console.log(this.favo);    // Affiche le contenu du panier dans la console (pour debug)
  }

  checkFilmFavori(movie: any): boolean {
    const favo: any = localStorage.getItem('favo');
    if (favo) {
      const favoris = JSON.parse(favo);
      for (let i = 0; i < favoris.length; i++) {
        if (favoris[i].id === movie.id) {
          return true;
        }
      }
    }
    return false;
  }

  sortFilmsAlphabetically(films: Film[]): Film[] {
    return films.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  }

  getGenres(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + `/genre/movie/list?api_key=` + environment.keyAPI);
  }

  getFilmsParGenre(genreId: number): Observable<Film[]> {
    return this.http.get<Film[]>(environment.apiBaseUrl + `/discover/movie?api_key=` + environment.keyAPI + `&with_genres=` + genreId)
    .pipe(
      map((data: any) => data.results),
    );
  }

  getFilmsAction(): Observable<Film[]> {
    return this.http.get<Film[]>(environment.apiBaseUrl + `/discover/movie?api_key=` + environment.keyAPI + `&with_genres=` + 28).pipe(
      map((data: any) => data.results),
    );
  }

  getFilmsAnimation(): Observable<Film[]> {
    return this.http.get<Film[]>(environment.apiBaseUrl + `/discover/movie?api_key=` + environment.keyAPI + `&with_genres=` + 16).pipe(
      map((data: any) => data.results),
    );
  }

  getFilmsBoo(): Observable<Film[]> {
    return this.http.get<Film[]>(environment.apiBaseUrl + `/discover/movie?api_key=` + environment.keyAPI + `&with_genres=` + 27).pipe(
      map((data: any) => data.results),
    );
  }

}