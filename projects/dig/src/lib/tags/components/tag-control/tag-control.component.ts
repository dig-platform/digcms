import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {Media} from '../../../media/interfaces/media';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-tag-control',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatChipsModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './tag-control.component.html',
  styleUrls: ['./tag-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: TagControlComponent
    }
  ]
})
export class TagControlComponent implements ControlValueAccessor {
  @Input() label: string = 'Add tags';
  public tags: string[] | undefined = [];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  readonly chipInput = new FormControl();

  _onChange!: (_: any) => void;
  _onTouched!: () => void;

  add($event: MatChipInputEvent) {
    const tag = ($event.value || '').trim();
    this.chipInput.reset();
    if (this.tags) {
      this.tags.push(tag);
    } else {
      this.tags = [tag];
    }
    this._onChange(this.tags)
  }

  remove(tag: any) {
    if (this.tags) {
      const index = this.tags.indexOf(tag);

      if (index >= 0) {
        this.tags.splice(index, 1);
        this._onChange(this.tags);
      }
    }
  }

  edit(tag: any, $event: MatChipEditedEvent) {
    const value = $event.value.trim();

    if (!value || !this.tags) {
      this.remove(tag);
      return;
    }

    // Edit existing fruit
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index] = value;
    }
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(tags: string[] | undefined): void {
    this.tags = tags ? [...tags] : undefined;
  }
}
