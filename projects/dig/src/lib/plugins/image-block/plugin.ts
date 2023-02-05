import {Plugin} from '../../core/services/plugin.service';

export const imageBlock: Plugin = {
  id: 'image-block',
  description: 'Image with block of text',
  form: () => import('./image-block.component').then(cmp => cmp.ImageBlockComponent),
  title: 'Image Block'
}
