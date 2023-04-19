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
    });
  }

  addToFavorites(movie: any) {
    const isPresent = this.recupFilmsService.checkFilmFavori(movie);
    if (!isPresent) {
      this.recupFilmsService.ajouterFilmFavori(movie);
      alert('Le film a été ajouté à vos favoris.');
    } else {
      alert('Le film est déjà présent dans vos favoris.');
    }
  }  
}



