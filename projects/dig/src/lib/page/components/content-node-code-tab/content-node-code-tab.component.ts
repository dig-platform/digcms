import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {CodeViewComponent} from '../../../ui/components/code-view/code-view.component';
import {PluginService} from '../../../core/services/plugin.service';
import {JsonViewComponent} from '../../../ui/components/json-view/json-view.component';
import {Page} from '../../interfaces/page';
import {ContentNode} from '../../interfaces/content-node';
import {selectActivePage} from '../../state/pages/page.selectors';
import {
  selectActiveContentNode,
  selectActiveNodeContent,
  selectContentNodes
} from '../../state/content-nodes/content-node.selectors';
import {ContentNodeService} from '../../services/content-node.service';
import {Store} from '@ngrx/store';
import {selectContentMap} from '../../state/content-nodes/content-node.selectors';
import {concatMap, mergeMap, Observable, tap} from 'rxjs';
import {Plugin} from '../../../core/interfaces/plugin';
import {selectPlugins} from '../../../core/state/plugins/plugin.selectors';
import {map} from 'rxjs/operators';
import * as dashify from 'dashify';
import camelcase from 'camelcase';
import {ContentNodeListComponent} from '../content-node-list/content-node-list.component';
import {PluginFormComponent} from '../../../core/components/plugin-form/plugin-form.component';

@Component({
  selector: 'app-content-node-code-tab',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, CodeViewComponent, JsonViewComponent, ContentNodeListComponent, PluginFormComponent],
  templateUrl: './content-node-code-tab.component.html',
  styleUrls: ['./content-node-code-tab.component.scss']
})
export class ContentNodeCodeTabComponent {
  readonly contentMap$ = this.store.select(selectContentMap);
  readonly content$ = this.store.select(selectActiveNodeContent);
  readonly activeNode$: Observable<ContentNode | undefined> = this.store.select(selectActiveContentNode);
  readonly activePage$: Observable<Page | undefined> = this.store.select(selectActivePage);
  readonly plugins$: Observable<Plugin[]> = this.store.select(selectPlugins);

  public code = [
    '```typescript',

    '```',
  ].join(`\n`);

  public ts$ = this.activeNode$.pipe(
    mergeMap(node => this.activePage$.pipe(
      map(page => {
        return [
          'readonly content$ = this.dig.content;',
          '',
          'constructor(private dig: DigService) {',
          `  dig.setPage('${page?.path}')`,
          '}'
        ]
      })
    ))
  )

  public html$ = this.activeNode$.pipe(
    mergeMap(node => this.getExamples(node?.type).pipe(
      map(examples => {
        if (! node) {
          return '';
        }
        if (examples && examples['html']) {
          return examples['html']({...node});
        } else {
          // use default template
          const className = dashify(node.name);
          const propName = camelcase(node.name);
          return [
            '<main class="home" *ngIf="content$ | async as content">',
            `  <section class="${className}" *ngIf="content.${propName} as ${propName}">`,
            `    <!-- do something with your ${node.name} -->`,
            '  </section>',
            '</main>',
          ]
        }
      })
    ))
  )

  public scss$ = this.activeNode$.pipe(
    mergeMap(node => this.activePage$.pipe(
      mergeMap(page => this.getExamples(node?.type).pipe(
        map(examples => {
          if (! node) {
            return;
          }
          if (examples && examples['scss']) {
            return examples['scss']({...node});
          } else {
            // use default template
            const className = dashify(node.name);
            return [
              `.${className}{`,
              `}`,
            ]
          }
        })
      ))
    ))
  )
  constructor(private store: Store) {

  }

  getExamples(type: string | undefined) {
    return this.plugins$.pipe(
      map(plugins => plugins ? plugins.find(p => p.id === type)?.examples : null)
    );
  }
}
