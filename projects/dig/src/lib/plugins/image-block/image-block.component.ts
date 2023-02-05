import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {UploadDirective} from '../../media/directives/upload.directive';
import {MediaButtonComponent} from '../../media/components/media-button/media-button.component';
import {map} from 'rxjs/operators';
import {MediaViewerComponent} from '../../media/components/media-viewer/media-viewer.component';
import {Media} from '../../media/interfaces/media';

@Component({
  selector: 'app-image-block',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, UploadDirective, MatButtonModule, MatProgressBarModule, MatCardModule, MediaButtonComponent, MediaViewerComponent],
  templateUrl: './image-block.component.html',
  styleUrls: ['./image-block.component.scss']
})
export class ImageBlockComponent {
  public progress: number | null = null;
  // todo show upload progress
  readonly form = new FormGroup({
    image: new FormControl(),
    alt: new FormControl(),
    title: new FormControl(),
    subtitle: new FormControl(),
    content: new FormControl(),
    cta: new FormControl(),
    link: new FormControl(),
  })

  public media!: Media;

  readonly media$ = this.form.valueChanges.pipe(
    map(({image}) => image && image.id ? {...image} : undefined)
  )

  constructor() {
    this.media$.subscribe(media => {
      this.media = media;
    });
  }
  get imagePreview() {
    const image = this.form.get('image')?.value;
    if (image) {
      return image.url;
    }
    return undefined;
  }
  //
  // get showProgress() {
  //   return this.progress !== null && this.progress < 100;
  // }
  //
  // upload($event: any) {
  //   this.form.get('image')?.setValue($event);
  // }
  //
  // setUploadProgress($event: number | null) {
  //   this.progress = $event;
  //   console.log($event);
  // }

  setMedia($event: any) {
    this.form.patchValue({
      image: {...$event}
    })
  }
}
