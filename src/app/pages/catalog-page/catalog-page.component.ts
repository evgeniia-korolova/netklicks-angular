import { Component } from '@angular/core';
import { FILMS } from '../../constants/films.constants';
import { Film } from '../../models/film.model';
import { FilmSearchService } from '../../services/film-search.service';


@Component({
  selector: 'app-catalog-page',
  standalone: false,

  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent {
  //  public films: Film[] = FILMS;

    constructor (
       private _filmSearchService: FilmSearchService
     ) {}

     public get films(): Film[] {
       return this._filmSearchService.getFilteredFilms;
     }
}
