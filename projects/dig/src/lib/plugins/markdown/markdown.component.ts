import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {PluginForm} from '../../core/services/plugin.service';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements PluginForm{
  readonly form = new FormGroup({
    title: new FormControl(),
    subtitle: new FormControl()
  })
}
