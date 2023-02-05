import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './user/guards/auth.guard';
import {DigCmsComponent} from './dig-cms.component';

const routes: Routes = [
  {
    path: '',
    component: DigCmsComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./core/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'pages',
        canActivate: [AuthGuard],
        loadChildren: () => import('./page/pages/pages/pages.module').then(m => m.PagesModule)
      },
      { path: 'docs', loadChildren: () => import('./doc/pages/docs/docs.module').then(m => m.DocsModule) },
      {
        path: 'blocks',
        canActivate: [AuthGuard],
        loadChildren: () => import('./block/pages/blocks/blocks.module').then(m => m.BlocksModule) },
      {
        path: 'media',
        canActivate: [AuthGuard],
        loadChildren: () => import('./media/pages/media/media.module').then(m => m.MediaModule) },
      {
        path: 'users',
        canActivate: [AuthGuard],
        loadChildren: () => import('./user/pages/users/users.module').then(m => m.UsersModule) },
      { path: 'blog', loadChildren: () => import('./blog/pages/blog/blog.module').then(m => m.BlogModule) },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigRoutingModule { }
