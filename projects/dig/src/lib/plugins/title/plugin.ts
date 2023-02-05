import {Plugin} from '../../core/services/plugin.service';

export const title: Plugin = {
  id: 'title',
  description: '',
  form: () => import('./title.component').then(cmp => cmp.TitleComponent),
  title: 'Title'
}
