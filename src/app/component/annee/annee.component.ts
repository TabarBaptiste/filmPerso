import { Component, OnInit } from '@angular/core';
import { RecupFilmsService } from '../../service/recup-films.service';
import { Film } from '../../models/Film';

@Component({
  selector: 'app-annee',
  templateUrl: './annee.component.html',
  styleUrls: ['./annee.component.css']
})
export class AnneeComponent implements OnInit {
  annee: number = new Date().getFullYear();
  films: Film[] = [];

  constructor(private recupFilmsService: RecupFilmsService) {}

  ngOnInit(): void {
    this.recupFilmsService.getFilmsByYear(this.annee).subscribe((data) => {
      this.films = data;
    });
  }

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

