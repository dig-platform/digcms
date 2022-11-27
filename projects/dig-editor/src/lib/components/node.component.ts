import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DigEditorNode} from '../interfaces/dig-editor-node';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as NodeActions from '../store/editor/node/node.actions';
import * as NodeSelectors from '../store/editor/node/node.selectors';

@Component({
  selector: 'dig-editor-node',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="dig-editor-node">
      <textarea
        #input
        [class]="['dig-editor-input', this.node.format]"
        [formControl]="control"
        (focusin)="setActive()"
        (keydown.enter)="insertAfter($event)"
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
export class NodeComponent implements OnInit, AfterViewInit{
  @Input() node!: DigEditorNode;

  @Output() previous: EventEmitter<DigEditorNode> = new EventEmitter<DigEditorNode>();
  @Output() next: EventEmitter<DigEditorNode> = new EventEmitter<DigEditorNode>();
  @Output() delete: EventEmitter<DigEditorNode> = new EventEmitter<DigEditorNode>();
  @Output() changed: EventEmitter<DigEditorNode> = new EventEmitter<DigEditorNode>();

  @ViewChild('input') input!: ElementRef;

  readonly control = new FormControl();

  constructor(readonly store: Store) {
  }

  setFocus() {
    this.input.nativeElement.focus();
  }

  ngOnInit(): void {
    this.control.setValue(this.node.content);
  }

  setActive() {
    this.store.dispatch(NodeActions.setActiveNode({id: this.node.id}))
  }

  insertAfter(ev: Event) {
    ev.preventDefault();
    this.store.dispatch(NodeActions.insertAfter());
    return false;
  }

  ngAfterViewInit(): void {
    this.store.select(NodeSelectors.selectCurrentNodeId).subscribe(id => {
      if (id && id === this.node.id) {
        setTimeout(() => this.setFocus(), 25);
      }
    })
  }
}
