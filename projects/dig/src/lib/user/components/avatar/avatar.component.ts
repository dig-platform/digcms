import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {map} from 'rxjs/operators';
import {MatIconModule} from '@angular/material/icon';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  readonly avatar$ = this.auth.user().pipe(
    map(user => user?.photoURL)
  );
  @Input() user!: User;


  constructor(private auth: AuthService) {
  }
}
