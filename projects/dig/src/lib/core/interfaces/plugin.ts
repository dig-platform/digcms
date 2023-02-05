import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

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
