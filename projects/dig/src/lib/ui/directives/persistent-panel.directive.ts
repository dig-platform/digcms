import {AfterViewInit, Directive, Input, OnInit} from '@angular/core';
import {MatExpansionPanel} from '@angular/material/expansion';
import {Store} from '@ngrx/store';
import {setPanel} from '../../core/state/dig/dig.actions';
import {selectPanelState} from '../../core/state/dig/dig.selectors';
import {take} from 'rxjs';

@Directive({
  selector: '[persistentPanel]',
  standalone: true
})
export class PersistentPanelDirective implements AfterViewInit, OnInit{
  @Input() persistentPanel!: string;

  constructor(private panel: MatExpansionPanel, private store: Store) { }

  ngAfterViewInit() {
    this.panel.expandedChange.subscribe(expanded => this.setOpenStatus(expanded));
  }

  setOpenStatus(open: boolean) {
    this.store.dispatch(setPanel({id: this.persistentPanel, panel: {open}}));
  }

  ngOnInit(): void {
    this.store.select(selectPanelState).pipe(take(1)).subscribe(panels => {
      if (panels.hasOwnProperty(this.persistentPanel)) {
        this.panel.expanded = panels[this.persistentPanel].open;
      }
    });
  }
}
