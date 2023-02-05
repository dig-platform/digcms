import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media.component';

const routes: Routes = [
  { path: '', component: MediaComponent },
  { path: ':fileId', loadChildren: () => import('./file/file.module').then(m => m.FileModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
