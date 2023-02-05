import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {User} from '../../interfaces/user';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-user-row',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss']
})
export class UserRowComponent {
  @Input() user!: User;
}
