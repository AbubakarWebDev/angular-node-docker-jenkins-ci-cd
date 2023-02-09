import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeleteDataComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: DeleteDataComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteRoutingModule { }