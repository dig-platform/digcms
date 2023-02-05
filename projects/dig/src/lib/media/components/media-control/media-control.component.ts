import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MediaViewerComponent} from '../media-viewer/media-viewer.component';
import {MediaButtonComponent} from '../media-button/media-button.component';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {Media} from '../../interfaces/media';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-media-control',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MediaViewerComponent,
    MediaButtonComponent,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './media-control.component.html',
  styleUrls: ['./media-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: MediaControlComponent
    }
  ]
})
export class MediaControlComponent implements ControlValueAccessor{
  // todo support multiple
  media!: Media | undefined

  get hasMedia() {
    return this.media && this.media.name;
  }

  _onChange!: (_: any) => void;
  _onTouched!: () => void;

  setMedia($event: any) {
    this.media = {...$event};
    this._onChange($event);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(media: Media | undefined): void {
    this.media = media ? {...media} : undefined;
  }
}
