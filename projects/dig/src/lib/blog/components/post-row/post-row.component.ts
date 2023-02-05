import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Post} from '../../interfaces/blog';
import {MatIconModule} from '@angular/material/icon';
import {MediaViewerComponent} from '../../../media/components/media-viewer/media-viewer.component';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-post-row',
  standalone: true,
  imports: [CommonModule, MatIconModule, MediaViewerComponent, MatCardModule, RouterModule, MatButtonModule],
  templateUrl: './post-row.component.html',
  styleUrls: ['./post-row.component.scss']
})
export class PostRowComponent {
  @Input() post!: Post;
}
