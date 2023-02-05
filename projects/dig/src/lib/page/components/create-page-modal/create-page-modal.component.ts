import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {Router, RouterModule} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Page} from '../../interfaces/page';
import {Store} from '@ngrx/store';
import {selectRecentPages} from '../../state/pages/page.selectors';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-create-page-modal',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, MatDividerModule],
  templateUrl: './create-page-modal.component.html',
  styleUrls: ['./create-page-modal.component.scss']
})
export class CreatePageModalComponent {
  readonly pages$ = this.store.select(selectRecentPages);

  readonly form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    template: new FormControl(null)
  })

  constructor(
    public dialogRef: MatDialogRef<CreatePageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private pageService: PageService,
    private store: Store
  ) {}

  async create() {
    // todo show status
    const data = {...this.form.value};
    const page = data.template ?
      await this.pageService.duplicatePage(data.name, data.template) : await this.pageService.createPage({name: data.name} as Page);
    this.dialogRef.close();
    return this.router.navigate(['/dig-cms/pages', page.id]);
  }

  close(): void {
    this.dialogRef.close();
  }
}
