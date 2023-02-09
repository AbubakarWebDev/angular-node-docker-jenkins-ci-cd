import { NgModule } from '@angular/core';

import { CreateDataComponent } from './components';

import { CreateRoutingModule } from './create-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CreateDataComponent
  ],
  imports: [
    CreateRoutingModule,
    SharedModule,
  ]
})
export class CreateModule { }
