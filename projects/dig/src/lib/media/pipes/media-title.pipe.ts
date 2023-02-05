import { Pipe, PipeTransform } from '@angular/core';
import {Media} from '../interfaces/media';

@Pipe({
  name: 'mediaTitle',
  standalone: true
})
export class MediaTitlePipe implements PipeTransform {

  transform(value: Media, ...args: unknown[]): string {
    const name = value.name.split('/').pop();
    return name + '';
  }

}
