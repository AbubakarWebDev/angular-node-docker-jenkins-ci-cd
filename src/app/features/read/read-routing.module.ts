import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadDataComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ReadDataComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadRoutingModule { }