import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarkdownModule} from 'ngx-markdown';

@Component({
  selector: 'app-code-view',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.scss']
})
export class CodeViewComponent {
  @Input() lang!: string;
  @Input() code: string[] | null = [];

  get snippet() {
    if (! this.code) {
      return;
    }
    return [
      '```' + this.lang,
      ...this.code,
      '```'
    ].join(`\n`)
  }
}
