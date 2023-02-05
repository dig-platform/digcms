import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '../../interfaces/page';
import {FormControl, Validators} from '@angular/forms';
import * as dashify from 'dashify';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  readonly pages$: Observable<Page[]> = this.pageService.getPages();

  readonly pageControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(4)
  ]);

  get path(): string {
    return this.pageControl.value ? dashify(this.pageControl.value) : '';
  }
  constructor(private pageService: PageService, private router: Router) {
  }

  async createPage() {
    const name = this.pageControl.value + '';
    const page = await this.pageService.createPage({
      name,
      path: this.path
    });
    // todo handle failure
    return this.router.navigate(['/dig-cms/pages', page.id]);
  }
}
