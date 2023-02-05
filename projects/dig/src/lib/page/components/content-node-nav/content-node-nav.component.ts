import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {mergeMap, Observable} from 'rxjs';
import {ContentNodeService} from '../../services/content-node.service';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {ContentNode} from '../../interfaces/content-node';

@Component({
  selector: 'app-content-node-nav',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterModule],
  templateUrl: './content-node-nav.component.html',
  styleUrls: ['./content-node-nav.component.scss']
})
export class ContentNodeNavComponent implements OnChanges{
  @Input() pageId!: string;

  public contentNodes$!: Observable<ContentNode[]>;

  constructor(
    private contentService: ContentNodeService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pageId']) {
      this.contentNodes$ = this.contentService.getPageNodes(this.pageId);
    }
  }
}
