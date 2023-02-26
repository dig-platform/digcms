import { Component } from '@angular/core';
import {DigCmsService} from 'dig';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly content$ = this.dig.getContent('home');

  constructor(private dig: DigCmsService) {
    this.content$.then(console.log);
  }
}
