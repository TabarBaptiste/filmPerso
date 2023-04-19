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

  constructor(private recupFilmsService: RecupFilmsService) { }

  loadFilmsAction() {
    this.selectedCategory = 'action'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsAction().subscribe(actions => this.actions = actions);
  }

  loadFilmsAnimation() {
    this.selectedCategory = 'animation'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsAnimation().subscribe(animation => this.animation = animation);
  }

  loadFilmsHorreur() {
    this.selectedCategory = 'horreur'; // Mettre à jour la catégorie sélectionnée
    this.recupFilmsService.getFilmsBoo().subscribe(horreur => this.horreur = horreur);
  }

}

