import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {PluginForm} from '../../core/services/plugin.service';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements PluginForm{
  readonly form = new FormGroup({
    title: new FormControl(),
    subtitle: new FormControl()
  })
}
