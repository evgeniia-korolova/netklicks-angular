import { Component } from '@angular/core';
import { FilmSearchService } from '../../services/film-search.service';

@Component({
  selector: 'app-search',
  standalone: false,

  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  public searchString: string = '';

  constructor(private _filmSearchService: FilmSearchService) {}
  updateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchString = target.value;
  }

  updateSearch($event: MouseEvent) {
    $event.preventDefault();
    this._filmSearchService.setSearchString = this.searchString;
  }
}
