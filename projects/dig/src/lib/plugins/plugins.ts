import {title} from './title/plugin';
import {PluginMap} from '../core/services/plugin.service';
import {image} from './image/plugin';
import {markdown} from './markdown/plugin';
import {hero} from './hero/plugin';
import {imageBlock} from './image-block/plugin';
import {grid} from './grid/plugin';
import {footer} from './footer/plugin';

export const plugins: PluginMap = {
  title,
  image,
  markdown,
  hero,
  imageBlock,
  grid,
  footer
}
