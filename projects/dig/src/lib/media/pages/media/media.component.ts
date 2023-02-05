import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {

  constructor(private store: Store, private router: Router) {
  }

  openFile($event: any) {
    return this.router.navigate(['/dig-cms/media', $event.id + ''])
  }
}
