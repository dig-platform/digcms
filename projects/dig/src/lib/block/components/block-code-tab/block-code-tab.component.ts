import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-block-code-tab',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './block-code-tab.component.html',
  styleUrls: ['./block-code-tab.component.scss']
})
export class BlockCodeTabComponent {

}
