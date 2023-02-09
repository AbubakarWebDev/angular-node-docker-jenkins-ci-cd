import { NgModule } from '@angular/core';

import { UpdateDataComponent } from './components';
import { UpdateRoutingModule } from "./update-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UpdateDataComponent
  ],
  imports: [
    SharedModule,
    UpdateRoutingModule
  ]
})
export class UpdateModule { }
