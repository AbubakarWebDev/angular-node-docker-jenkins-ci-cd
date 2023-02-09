import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpdateDataComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: UpdateDataComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRoutingModule { }
