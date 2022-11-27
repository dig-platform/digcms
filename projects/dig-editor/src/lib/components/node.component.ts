import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DigEditorNode} from '../interfaces/dig-editor-node';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';

@Component({
  selector: 'dig-editor-node',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="dig-editor-node">
      <textarea
        #input
        [class]="inputClass"
        [formControl]="control"
        [rows]="rows"
        (keydown.backspace)="handleDelete()"
        (keydown.tab)="handleTab()"
        (keydown.return)="handleReturn()"
      ></textarea>
    </div>
  `,
  styles: [`
    .dig-editor-node{
      padding: .25rem;
      background: #FAFAFA;
      display: flex;
    }
    .dig-editor-input{
      border: none;
      background: #fff;
      outline: none;
      display: block;
      flex: 1;
    }
    .h1{
      font-size: 2rem;
      font-weight: 700;
    }
  `]
})
export class NodeComponent implements OnInit{
  @Input() node!: DigEditorNode;

  @Output() previous: EventEmitter<DigEditorNode> = new EventEmitter<DigEditorNode>();
  @Output() next: EventEmitter<DigEditorNode> = new EventEmitter<DigEditorNode>();
  @Output() delete: EventEmitter<DigEditorNode> = new EventEmitter<DigEditorNode>();
  @Output() changed: EventEmitter<DigEditorNode> = new EventEmitter<DigEditorNode>();

  @ViewChild('input') input!: ElementRef;

  readonly control = new FormControl();

  constructor(private store: Store) {

  }

  get inputClass() {
    return ['dig-editor-input', this.node.format];
  }

  get rows() {
    return 1;
  }

  get nodeState() {
    return {
      ...this.node,
      content: this.control.value
    }
  }

  ngOnInit(): void {
    this.control.setValue(this.node.content);
  }

  handleDelete() {
    if (this.control.value.trim().length === 0) {
      this.delete.emit(this.nodeState);
    }
  }

  handleTab() {

  }

  handleReturn() {

  }

  setFocus() {
    this.input.nativeElement.setFocus();
  }
}
