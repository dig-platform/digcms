import {Plugin} from '../../core/services/plugin.service';

export const grid: Plugin = {
  id: 'grid',
  description: 'List of content blocks',
  form: () => import('./grid.component').then(cmp => cmp.GridComponent),
  title: 'Grid'
}
