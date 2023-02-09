import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './core/components/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/read/read.module').then(m => m.ReadModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./features/create/create.module').then(m => m.CreateModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./features/update/update.module').then(m => m.UpdateModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./features/delete/delete.module').then(m => m.DeleteModule)
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
