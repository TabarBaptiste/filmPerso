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

  constructor(private recupFilmsService: RecupFilmsService) { }

  ngOnInit(): void {
    this.recupFilmsService.getFilmsByYear(this.annee).subscribe((data) => {
      this.films = data;
    });
  }

  previousYear() {
    if (this.annee >= 1874) {

      this.annee--;
      this.recupFilmsService.getFilmsByYear(this.annee).subscribe((data) => {
        this.films = data;
      });
    }
    else {
      this.annee = this.annee + 1;
    }
  }

  nextYear() {
    this.annee++;
    this.recupFilmsService.getFilmsByYear(this.annee).subscribe((data) => {
      this.films = data;
    });
  }

  // annee.component.ts
  updateFilmsByYear() {
    // Vérifier si l'année saisie est valide (par exemple, entre 1900 et l'année actuelle)
    if (this.annee >= 1874) {
      // Effectuer l'appel au service pour récupérer les films de l'année saisie
      this.recupFilmsService.getFilmsByYear(this.annee).subscribe((data) => {
        this.films = data;
      });
    } else {
      // Réinitialiser l'année à l'année actuelle si elle est invalide
      this.annee = this.annee + 1;
      // Ou afficher un message d'erreur à l'utilisateur, par exemple :
      // alert('Veuillez saisir une année valide entre 1900 et ' + new Date().getFullYear());
    }
  }

}

