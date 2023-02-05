import { Injectable } from '@angular/core';
import {plugins} from '../../plugins/plugins';
import {FormGroup} from '@angular/forms';
export interface Plugin {
  id: string;
  title: string;
  description: string;
  examples?: any;
  form: () => Promise<any>
}

export interface PluginMap{
  [id: string]: Plugin
}

export interface PluginForm {
  form: FormGroup;
  setValue?: (data: any) => void
}

@Injectable({
  providedIn: 'root'
})
export class PluginService {
  private pluginMap: PluginMap = plugins;

  get plugins() {
    return Object.keys(this.pluginMap).map(id => ({
      id,
      title: this.pluginMap[id].title,
      description: this.pluginMap[id].description,
      examples: this.pluginMap[id].examples,
    } as Plugin))
  }

  constructor() { }

  getPlugin(id: string) {
    return this.plugins.find(p => p.id === id) as Plugin;
  }

  registerPlugin(id: string, plugin: Plugin) {
    this.pluginMap[id] = {...plugin};
  }

  form(plugin: string): Promise<any> {
    return this.pluginMap[plugin]?.form();
  }
}
