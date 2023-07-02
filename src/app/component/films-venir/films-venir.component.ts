import { Component, OnInit } from '@angular/core';
import { RecupFilmsService } from 'src/app/service/recup-films.service';
import { Film, Actor } from 'src/app/models/Film';

@Component({
  selector: 'app-films-venir',
  templateUrl: './films-venir.component.html',
  styleUrls: ['./films-venir.component.css']
})
export class FilmsVenirComponent implements OnInit {

  filmsAVenir: Film[] = [];
  selectedFilmId: number | undefined;
  selectedFilmOverview: string | undefined;
  selectedFilmActors: any[] = [];
  movie: any
  page: number = 1;

  constructor(private recupFilmsService: RecupFilmsService) { }

  ngOnInit(): void {
    this.recupFilmsService.getFilmsAVenir().subscribe((films: Film[]) => {
      // Filtrer les films à venir (ceux dont la date de sortie est après la date actuelle)
      const dateActuelle = new Date();
      this.filmsAVenir = films.filter(film => new Date(film.release_date) > dateActuelle);
      console.log(this.filmsAVenir)
    });
  }

  showDetails(id: number): void {
    this.recupFilmsService.getDetailsFilm(id).subscribe((data) => {
      this.selectedFilmId = id;
      this.selectedFilmOverview = data.overview;
    });
  
      this.recupFilmsService.getActeurByFilm(id).subscribe((actor: Actor[]) => {
      this.selectedFilmActors = actor;
    });
  }
  
}
