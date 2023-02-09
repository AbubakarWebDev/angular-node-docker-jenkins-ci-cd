import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from './guards/module-import.guard';

import { Error404Component } from './components/error404/error404.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiHttpService } from './services/api-http.service';
import { ApiEndpointsService } from './services/api-endpoints.service';
import { ToastrModule } from 'ngx-toastr';

// Core Module: The CoreModule takes on the role of the app root module, but is not the module that gets bootstrapped by Angular at run-time. The common denominator between the files present here is that we only need to load them once, and that is at run-time, which makes them singleton. The module contains root-scoped services, static components like the navbar and footer, interceptors, guard, constants, enums, utils, and universal models. To prevent re-importing the module elsewhere, we should add a module-import-guard in it’s constructor method. We do not want to put, are components used throughout the application inside of the Core Module. We have the Shared Module for that.

@NgModule({
  declarations: [
    Error404Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ApiHttpService,
    ApiEndpointsService,
  ],
  exports: [
    Error404Component,
    HeaderComponent,
    FooterComponent
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}