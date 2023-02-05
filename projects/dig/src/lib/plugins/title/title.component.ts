import {Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {PluginForm} from '../../core/services/plugin.service';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements PluginForm{
  readonly form = new FormGroup({
    title: new FormControl(),
    subtitle: new FormControl()
  })
}
