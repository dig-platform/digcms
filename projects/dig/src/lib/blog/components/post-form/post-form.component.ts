import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DeleteButtonComponent} from '../../../ui/components/delete-button/delete-button.component';
import {map} from 'rxjs/operators';
import {ContentNode} from '../../../page/interfaces/content-node';
import {ContentNodeService} from '../../../page/services/content-node.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {firstValueFrom, Observable} from 'rxjs';
import {selectActivePost} from '../../state/post/post.selectors';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Post} from '../../interfaces/blog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BlogService} from '../../services/blog.service';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MediaControlComponent} from '../../../media/components/media-control/media-control.component';
import {MatChipsModule} from '@angular/material/chips';
import {TagControlComponent} from '../../../tags/components/tag-control/tag-control.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    DeleteButtonComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MediaControlComponent,
    MatChipsModule,
    TagControlComponent,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnChanges{
  @Input() post! : Post;

  readonly form = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    intro: new FormControl(),
    displayDate: new FormControl(),
    body: new FormControl(),
    tags: new FormControl(),
    media: new FormControl()
  })

  constructor(
    private blogService: BlogService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  save() {
    return this.blogService.updatePost(this.form.value as Post)
  }

  async delete() {
    await this.blogService.delete(this.post.id);
    return this.router.navigate(['/dig-cms/blog'])
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.form.dirty) {
      return;
    }
    if (changes['post']) {
      if (!! changes['post'].currentValue) {
        const post = {
          ...changes['post'].currentValue,
          displayDate: changes['post'].currentValue.displayDate ? changes['post'].currentValue.displayDate.toDate() : null
        };
        this.form.patchValue(post);
        this.form.markAsPristine();
      } else {
        this.form.reset();
      }
    }
  }
}
