import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {selectRecentPosts} from '../../state/post/post.selectors';
import {BlogService} from '../../services/blog.service';
import {Post} from '../../interfaces/blog';

@Component({
  selector: 'app-create-post-modal',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, MatDividerModule],
  templateUrl: './create-post-modal.component.html',
  styleUrls: ['./create-post-modal.component.scss']
})
export class CreatePostModalComponent {
  readonly posts$ = this.store.select(selectRecentPosts);

  readonly form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    template: new FormControl(null)
  })

  constructor(
    public dialogRef: MatDialogRef<CreatePostModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private blogService: BlogService,
    private store: Store
  ) {}

  async create() {
    // todo show status
    const data = {...this.form.value};
    const post = data.template ?
      await this.blogService.duplicatePost(data.title, data.template) : await this.blogService.createPost({title: data.title} as Post);
    this.dialogRef.close();
    return this.router.navigate(['/dig-cms/blog', post.id]);
  }

  close(): void {
    this.dialogRef.close();
  }
}
