import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {PluginForm} from '../../core/services/plugin.service';
import {UploadDirective} from '../../media/directives/upload.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, UploadDirective, MatButtonModule, MatProgressBarModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements PluginForm{
  public progress: number | null = null;
  // todo show upload progress
  readonly form = new FormGroup({
    image: new FormControl(),
    title: new FormControl(),
    subtitle: new FormControl(),
    cta: new FormControl(),
    link: new FormControl(),
  })

  get imagePreview() {
    const image = this.form.get('image')?.value;
    if (image) {
      return image.url;
    }
    return undefined;
  }

  get showProgress() {
    return this.progress !== null && this.progress < 100;
  }

  upload($event: any) {
    this.form.get('image')?.setValue($event);
  }

  setUploadProgress($event: number | null) {
    this.progress = $event;
  }
}
