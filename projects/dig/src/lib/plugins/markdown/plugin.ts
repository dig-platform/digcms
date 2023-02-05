import {Plugin} from '../../core/services/plugin.service';

export const markdown: Plugin = {
  id: 'markdown',
  description: '',
  form: () => import('./markdown.component').then(cmp => cmp.MarkdownComponent),
  title: 'Markdown Block'
}
