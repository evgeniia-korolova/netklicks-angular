import { Component, Input } from '@angular/core';

type TitleType = string | number;
interface TitleInterface {
  title: TitleType;
}

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: TitleType = '';
}
