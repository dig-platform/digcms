import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DigEditorModule} from '../../../../../projects/dig-editor/src/lib/dig-editor.module';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, DigEditorModule],
  template: `
    <dig-editor></dig-editor>
  `,
  styles: [
  ]
})
export default class EditorComponent {

}
