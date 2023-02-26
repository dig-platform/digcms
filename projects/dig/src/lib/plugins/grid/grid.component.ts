import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import {firstValueFrom} from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {PluginForm} from '../../core/services/plugin.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, DragDropModule, MatCardModule],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements PluginForm{
  readonly form = new FormGroup({
    title: new FormControl(),
    subtitle: new FormControl(),
    blocks: new FormArray([])
  })

  public setValue(data: any) {
    if (data.blocks) {
      data.blocks.forEach((block: any) => this.addBlock())
    } else {
      // add a single empty block
      this.addBlock();
    }
    this.form.patchValue(data);
  }

  get blocks(): FormArray<FormGroup> {
    return this.form.get('blocks') as FormArray;
  }

  addBlock() {
    this.blocks.push(new FormGroup({
      title: new FormControl(),
      icon: new FormControl(),
      content: new FormControl()
    }))
  }

  removeBlock(index: number) {
    this.blocks.removeAt(index);
  }


  async drop(event: CdkDragDrop<string[]>) {
    const blocks = [...this.blocks.value];
    moveItemInArray(blocks, event.previousIndex, event.currentIndex);
    this.blocks.setValue(blocks)
  }
}
