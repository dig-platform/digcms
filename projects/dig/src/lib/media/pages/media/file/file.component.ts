import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {map, startWith} from 'rxjs/operators';
import {setActiveMediaFile} from '../../../state/media/media.actions';
import {selectActiveMediaFile} from '../../../state/media/media.selectors';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {firstValueFrom, Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MediaService} from '../../../services/media.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit{
  readonly file$ = this.store.select(selectActiveMediaFile);
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl('');
  filteredTags: Observable<string[]>;
  private _tags: string[] = [];

  public dirty = false;

  get tags() {
    return [...this._tags];
  }

  set tags(tags: string[]) {
    this.dirty = this._tags !== tags;
    this._tags = [...tags];
  }
  allTags: string[] = ['image', 'screenshot'];

  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private mediaService: MediaService
  ) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => (tag ? this._filter(tag) : this.allTags.slice())),
    );
    this.file$.subscribe(file => {
      this.tags = file?.tags ? [...file.tags] : []
    })
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.tagCtrl.setValue(null);
  }

  remove(tag: string): void {
    const tags = [...this.tags];
    const index = tags.indexOf(tag);

    if (index >= 0) {
      tags.splice(index, 1);
      this.tags = tags;
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const tag = event.option.viewValue
    if (! this.tags.includes(tag)) {
      this.tags = [
        ...this.tags,
        tag
      ]
    }
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  async save() {
    this.dirty = false;
    const media = await firstValueFrom(this.file$);
    return this.mediaService.saveMedia({
      ...media,
      tags: this.tags
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase().trim();

    return this.allTags.filter(tag => {
      if (this.tags.find(t => t === tag)) {
        return false;
      }
      return tag.toLowerCase().includes(filterValue);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(({fileId}) => this.store.dispatch(setActiveMediaFile({fileId})))
  }


  async deleteFile() {
    const file = await firstValueFrom(this.file$);
    if (file?.id) {
      await this.mediaService.deleteMedia(file.id);
      return this.router.navigate(['/dig-cms/media']);
    }
    return;
  }
}
