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
    }
  }

  supprimerFilmFavori(film: Film): void {
    // Afficher la boîte de dialogue pour confirmer la suppression
    if (confirm("Supprimez le film des favoris ?")) {
      // Supprimer le film des favoris
      const index = this.favo.indexOf(film);
      if (index !== -1) {
        this.favo.splice(index, 1);
        localStorage.setItem('favo', JSON.stringify(this.favo));
        this.favoSubject.next(this.favo);
      }
    }
  }
  
}
