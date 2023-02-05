import {Component, OnInit} from '@angular/core';
import {PageService} from '../../../services/page.service';
import {ActivatedRoute} from '@angular/router';
import {mergeMap} from 'rxjs';
import {ContentNodeService} from '../../../services/content-node.service';
import {FormControl, Validators} from '@angular/forms';
import * as dashify from 'dashify';
import {Store} from '@ngrx/store';
import {loadPage} from '../../../state/pages/page.actions';
import {selectActivePage} from '../../../state/pages/page.selectors';
import {ContentNode} from '../../../interfaces/content-node';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit{
  readonly page$ = this.store.select(selectActivePage);

  readonly contentNodes$ = this.route.params.pipe(
    mergeMap(({pageId}) => this.contentService.getPageNodes(pageId))
  )

  public activeNode?: ContentNode | undefined;

  readonly nodeControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(4)
  ]);

  get path(): string {
    return this.nodeControl.value ? dashify(this.nodeControl.value) : '';
  }
  constructor(
    private pageService: PageService,
    private contentService: ContentNodeService,
    private route: ActivatedRoute,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(({pageId}) => {
      this.store.dispatch(loadPage({pageId}))
    })
  }

  createNode() {

  }

  setActiveNode(node: ContentNode) {
    this.activeNode = node;
  }
}
