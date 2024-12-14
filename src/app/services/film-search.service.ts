import { Injectable } from '@angular/core';
import { FILMS } from '../constants/films.constants';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmSearchService {
  private _films: Film[] = FILMS;
  private _searchString: string = '';

  constructor() {}

  public get getFullFilms(): Film[] {
    return this._films;
  }

  public get getFilteredFilms(): Film[] {
    return this._films.filter((film) =>
      film.title.toLowerCase().includes(this._searchString.toLowerCase())
    );
  }

  public get getSearchString(): string {
    return this._searchString;
  }

  public set setSearchString(value: string) {
    this._searchString = value;
  }
}
