import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/Film';
import { RecupFilmsService } from 'src/app/service/recup-films.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  favo: Film[] = [];
  favoSubject: Subject<Film[]> = new Subject<Film[]>();

  constructor(private recupFilmsService: RecupFilmsService) { }

  ngOnInit(): void {
    let favo: any = localStorage.getItem('favo');
    if (favo) {
      this.favo = JSON.parse(favo);
      //this.recupFilmsService.sortFilmsAlphabetically(this.favo); // Appeler la méthode de tri alphabétique du service
      console.log(this.favo);
      console.log("Bien envoyé")
    }
  }

  supprimerFilmFavori(leFilm: any): void {
    const index = this.favo.indexOf(leFilm);
    if (index !== -1) {
      this.favo.splice(index, 1);
      localStorage.setItem('favo', JSON.stringify(this.favo));
      this.favoSubject.next(this.favo);
    }
  }

}
