import { Component } from '@angular/core';
import { RecupFilmsService } from 'src/app/service/recup-films.service';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-genre-films',
  templateUrl: './genre-films.component.html',
  styleUrls: ['./genre-films.component.css']
})

export class GenreFilmsComponent {
  actions: Film[] = [];
  animation: Film[] = [];
  horreur: Film[] = [];
  selectedCategory: string = 'action'; // Nouvelle variable pour la catégorie sélectionnée

  genreId: number = 28;
  films: Film[] = [];

  constructor(private recupFilmsService: RecupFilmsService) { }

  ngOnInit(): void {
    this.recupFilmsService.getFilmsParGenre(this.genreId).subscribe((data) => {
      this.films = data;
    });
  }

  genreIds: number[] = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37];
  genreIndex: number = 0;

  genreSuivant() {
    this.genreIndex = (this.genreIndex + 1) % this.genreIds.length;
    this.genreId = this.genreIds[this.genreIndex];
    this.recupFilmsService.getFilmsParGenre(this.genreId).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsAction() {
    this.selectedCategory = 'action'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(28).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsAnimation() {
    this.selectedCategory = 'animation'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(16).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsHorreur() {
    this.selectedCategory = 'horreur'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(27).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsAdventure() {
    this.selectedCategory = 'adventure'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(12).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsComedy() {
    this.selectedCategory = 'comedy'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(35).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsCrime() {
    this.selectedCategory = 'crime'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(80).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsDocumentary() {
    this.selectedCategory = 'documentary'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(99).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsDrama() {
    this.selectedCategory = 'drama'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(18).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsFamily() {
    this.selectedCategory = 'family'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(10751).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsFantasy() {
    this.selectedCategory = 'fantasy'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(14).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsHistory() {
    this.selectedCategory = 'history'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(36).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsMusic() {
    this.selectedCategory = 'music'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(10402).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsMystery() {
    this.selectedCategory = 'mystery'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(9648).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsRomance() {
    this.selectedCategory = 'romance'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(10749).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsScienceFiction() {
    this.selectedCategory = 'science fiction'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(878).subscribe((data) => {
      this.films = data;
    });
  }

  loadFilmsTVMovie() {
    this.selectedCategory = 'tv movie'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsParGenre(10770).subscribe((data) => {
      this.films = data;
    });
  }

}

