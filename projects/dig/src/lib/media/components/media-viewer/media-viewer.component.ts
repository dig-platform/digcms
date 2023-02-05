import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Media} from '../../interfaces/media';
import {MediaService} from '../../services/media.service';
import {of} from 'rxjs';

@Component({
  selector: 'app-media-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.scss']
})
export class MediaViewerComponent implements OnChanges{
  @Input() file!: Media | undefined;
  @Input() alt!: string;

  // todo default to placeholder
  public url: string = '';

  constructor(private mediaService: MediaService) {
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes['file']) {
      const fileChanges = changes['file'];
      if (fileChanges && ! fileChanges.currentValue) {
        this.url = '';
        return;
      }


      if (fileChanges.currentValue.name === fileChanges.previousValue?.name) {
        return;
      }
      this.url = await this.mediaService.getUrl(fileChanges.currentValue);
    }
  }
}
