import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecupFilmsService } from 'src/app/service/recup-films.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: `./movie-details.component.html`,
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  item: any;
  constructor(private recupFilmsService: RecupFilmsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recupFilmsService.getDetailsFilm(id).subscribe((data) => {
      this.movie = data;
      this.item = this.recupFilmsService.checkFilmFavori(this.movie);
    });
  }

  addToFavorites(movie: any) {
    if (this.item) {
      if (confirm("Supprimez le film des favoris ?")) {
        this.recupFilmsService.supprimerFilmFavori(movie);
        this.item = false;
      }
    } else {
      if (confirm("Ajouter le film aux favoris ?")) {
        this.recupFilmsService.ajouterFilmFavori(movie);
        this.item = true;
      }
    }
  }
}
