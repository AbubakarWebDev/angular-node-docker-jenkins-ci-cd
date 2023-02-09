import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { DeleteDataComponent } from './components';
import { DeleteRoutingModule } from './delete-routing.module';

@NgModule({
  declarations: [
    DeleteDataComponent
  ],
  imports: [
    SharedModule,
    DeleteRoutingModule
  ]
})
export class DeleteModule { }
