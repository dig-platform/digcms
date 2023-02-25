import { Component } from '@angular/core';
import {DigCmsService} from 'dig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'digcms';

  constructor(private dig: DigCmsService) {
    dig.addShortcut({
      title: 'Tours',
      path: '/tours',
      // optional description, displays a tooltip
      description: 'Manage tours and trips',
      // optional icon, see https://fonts.google.com/icons
      icon: 'tour',
    })
  }
}
