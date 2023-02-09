import { NgModule } from '@angular/core';

import { ReadDataComponent } from './components';
import { ReadRoutingModule } from './read-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditUserModalComponent } from './components/edit-user-modal/edit-user-modal.component';
import { DeleteUserModalComponent } from './components/delete-user-modal/delete-user-modal.component';

@NgModule({
  declarations: [
    ReadDataComponent,
    EditUserModalComponent,
    DeleteUserModalComponent
  ],
  imports: [
    SharedModule,
    ReadRoutingModule,
  ],
})
export class ReadModule { }
