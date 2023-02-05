import {Plugin} from '../../core/services/plugin.service';

export const image: Plugin = {
  id: 'image',
  description: '',
  form: () => import('./image.component').then(cmp => cmp.ImageComponent),
  title: 'Image'
}
