import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateDataComponent } from './components';

const routes: Routes = [
    {
        path: '',
        component: CreateDataComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateRoutingModule { }
