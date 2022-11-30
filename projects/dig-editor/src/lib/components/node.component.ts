import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
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
        rows="rows"
        [class]="['dig-editor-input', this.node.format]"
        [formControl]="control"
        (focusin)="setActive()"
        (keydown.enter)="insertAfter($event)"
        (keydown.backspace)="deleteIfEmpty($event)"
        (keydown.arrowDown)="next($event)"
        (keydown.arrowUp)="previous($event)"
        (keydown.arrowRight)="nextIfAtEnd($event)"
        (keydown.arrowLeft)="previousIfAtStart($event)"
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
    .h2{
      font-size: 1.5rem;
      font-weight: 700;
    }
    .h3{
      font-size: 1rem;
      font-weight: 700;
    }
    .paragraph{
      font-size: 1rem;
      font-weight: 400;
    }
  `]
})
export class NodeComponent implements OnInit, AfterViewInit{
  @Input() node!: DigEditorNode;
  public rows = 1;

  @ViewChild('input') input!: ElementRef;
  @HostListener(':input')
  onInput() {
    this.resize();
  }
  readonly control = new FormControl();

  constructor(readonly store: Store) {
  }

  setFocus() {
    this.input.nativeElement.focus();
  }

  ngOnInit(): void {
    this.control.setValue(this.node.content);
  }

  ngAfterViewInit(): void {
    this.store.select(NodeSelectors.selectCurrentNode).subscribe(node => {
      if (node && node.id === this.node.id) {
        setTimeout(() => this.setFocus(), 25);
      }
    })

    if (this.input.nativeElement.scrollHeight) {
      setTimeout(() => this.resize());
    }
  }

  resize() {
    this.input.nativeElement.style.height = '0';
    this.input.nativeElement.style.height = this.input.nativeElement.scrollHeight + 'px';
  }

  setActive() {
    this.store.dispatch(NodeActions.setActiveNode({id: this.node.id}))
  }

  next(ev: Event) {
    ev.preventDefault();
    this.store.dispatch(NodeActions.nextNode());
  }

  insertAfter(ev: Event) {
    ev.preventDefault();
    this.store.dispatch(NodeActions.insertAfter({}));
  }

  deleteIfEmpty($event: any) {
    if (this.control.value.trim().length === 0) {
      this.store.dispatch(NodeActions.deleteNode({id: this.node.id}))
    }
  }

  previous(ev: any) {
    ev.preventDefault();
    this.store.dispatch(NodeActions.previousNode());
  }

  nextIfAtEnd(ev: any) {
    if (this.input.nativeElement.selectionEnd === this.control.value.length) {
      ev.preventDefault();
      this.store.dispatch(NodeActions.nextNode());
    }
  }

  previousIfAtStart(ev: any) {
    if (this.input.nativeElement.selectionStart === 0) {
      ev.preventDefault();
      this.store.dispatch(NodeActions.previousNode());
    }
  }
}
