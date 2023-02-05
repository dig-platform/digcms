import {Plugin} from '../../core/services/plugin.service';

export const footer: Plugin = {
  id: 'footer',
  description: '',
  form: () => import('./footer.component').then(cmp => cmp.FooterComponent),
  title: 'Footer'
}
