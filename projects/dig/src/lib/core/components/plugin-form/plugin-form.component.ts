import {
  Component, Directive, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {PluginService, Plugin, PluginForm} from '../../services/plugin.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {ContentNode} from '../../../page/interfaces/content-node';

@Directive({
  selector: '[appPlugin]',
  standalone: true
})
export class PluginDirective {

  constructor(public view: ViewContainerRef) {
  }

}


@Component({
  selector: 'app-plugin-form',
  standalone: true,
  imports: [CommonModule, PluginDirective, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatInputModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './plugin-form.component.html',
  styleUrls: ['./plugin-form.component.scss']
})
export class PluginFormComponent implements OnChanges, OnInit {
  @Input() contentNode!: ContentNode;

  @Output() valueChanges: EventEmitter<ContentNode> = new EventEmitter<ContentNode>();

  @ViewChild(PluginDirective, {static: true}) pluginWrapper!: PluginDirective;

  readonly plugins: Plugin[] = this.pluginService.plugins;

  private currentNode!: ContentNode;
  constructor(
    private pluginService: PluginService,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // we only want to reload this form if the content node or the type has changed
    // todo handle type change
    if (! this.currentNode || this.contentNode.id !== this.currentNode.id) {
      this.loadControl();
    }
  }

  async loadControl() {
    this.currentNode = this.contentNode;
    // register the plugin control
    this.pluginWrapper.view.clear();
    const component = await this.pluginService.form(this.contentNode.type);
    if (! component) {
      console.error(`Missing plugin: ${this.contentNode.type}`, this.contentNode.content);
      return;
    }
    const componentRef = this.pluginWrapper.view.createComponent(component);
    const plugin = componentRef.instance as PluginForm;
    if (plugin?.setValue) {
      plugin?.setValue({...this.contentNode.content})
    } else {
      plugin.form.patchValue(this.contentNode.content);
    }
    plugin.form.valueChanges.subscribe(content => this.valueChanges.emit({
      ...this.contentNode,
      content
    }));
  }

}
