import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponent } from './blocks.component';

const routes: Routes = [{ path: '', component: BlocksComponent }, { path: ':blockId', loadChildren: () => import('./block/block.module').then(m => m.BlockModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocksRoutingModule { }
