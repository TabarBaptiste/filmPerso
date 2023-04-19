import { Component, OnInit } from '@angular/core';
import { RecupFilmsService } from '../../service/recup-films.service';
import { Film } from '../../models/Film';

@Component({
  selector: 'app-annee',
  templateUrl: './annee.component.html',
  styleUrls: ['./annee.component.css']
})
export class AnneeComponent implements OnInit {
  annee: number = 2022;
  films: Film[] = [];
  /*selectedFilmId: number | undefined;
  selectedFilmOverview: string | undefined;*/

  constructor(private recupFilmsService: RecupFilmsService) {}

  ngOnInit(): void {
    this.recupFilmsService.getFilmsByYear(this.annee).subscribe((data) => {
      this.films = data;
    });
  }

  /*showDetails(id: number): void {
    this.recupFilmsService.getDetailsFilm(id).subscribe((data) => {
      this.selectedFilmId = id;
      this.selectedFilmOverview = data.overview;
    });
  }*/

  previousYear() {
    this.annee--;
    this.recupFilmsService.getFilmsByYear(this.annee).subscribe((data) => {
      this.films = data;
    });
  }

  nextYear() {
    this.annee++;
    this.recupFilmsService.getFilmsByYear(this.annee).subscribe((data) => {
      this.films = data;
    });
  }
}

