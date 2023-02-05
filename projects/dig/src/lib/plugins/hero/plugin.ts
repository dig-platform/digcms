import {Plugin} from '../../core/services/plugin.service';
import {ContentNode} from '../../page/interfaces/content-node';

const html = (node: ContentNode) => [
  `<main *ngIf="content$ | async as content">`,
  `  <section class="${node.name}" *ngIf="content.${node.name} as ${node.name}">`,
  `    <div class="content">`,
  `      <h1>{{${node.name}.title}}</h1>`,
  `      <p>{{${node.name}.subtitle}}</p>`,
  `      <a class="cta" mat-flat-button [href]="${node.name}.link">{{${node.name}.cta}}</a>`,
  `    </div>`,
  `  </section>`,
  `</main>`,
]

const scss = (node: ContentNode) => [
  `.${node.name}{`,
  `  background: #000;`,
  `  color: #fff;`,
  `  height: 80vh;`,
  `  display: flex;`,
  `  flex-direction: column;`,
  `  justify-content: center;`,
  `  align-items: center;`,
  ``,
  `  h1{`,
  `    font-size: 80px;`,
  `    font-weight: 600;`,
  `  }`,
  ``,
  `  p{`,
  `    font-size: 24px;`,
  `  }`,
  ``,
  `  .cta{`,
  `    background: #039be5;`,
  `    color: #fff;`,
  `  }`,
  `}`,
]

export const hero: Plugin = {
  id: 'hero',
  description: 'Generally used for the top of pages',
  form: () => import('./hero.component').then(cmp => cmp.HeroComponent),
  title: 'Hero',
  examples: {
    html,
    scss,
  }
}



