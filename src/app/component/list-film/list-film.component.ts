import { Component, OnInit } from '@angular/core';
import { RecupFilmsService } from 'src/app/service/recup-films.service';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {
  films: Film[] = [];
  genres: any;
  showGenres: boolean = false;

  constructor(private recupFilmsService: RecupFilmsService) {}

  ngOnInit() {
    this.recupFilmsService.getFilmsPopulaires().subscribe((data) => {
      this.films = data;
      //this.films = data.sort((a, b) => a.title.localeCompare(b.title));
      //this.films = data.sort((a, b) => a.vote_average - (b.vote_average));
    });
  }

}
