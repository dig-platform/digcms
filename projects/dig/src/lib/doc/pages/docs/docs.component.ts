import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit{
  readonly path$ = this.route.url.pipe(
    map(url => {
      const segments = url.reduce((path: string[], segment) => {
        path.push(segment.path);
        return path;
      }, [] as string[])
      if (segments.length === 0) {
        segments.push('index');
      }
      return `assets/docs/${segments.join('/')}.md`
    }),
  )

  readonly pages = [
    {
      link: '/dig-cms/docs',
      label: 'Getting Started',
      indent: 0
    },
    {
      link: '/dig-cms/docs/pages',
      label: 'Pages',
      indent: 0
    },
    {
      link: '/dig-cms/docs/pages/content',
      label: 'Managing Content',
      indent: 1
    },
    {
      link: '/dig-cms/docs/pages/developers',
      label: 'Developers',
      indent: 1
    },
  ]
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
}
