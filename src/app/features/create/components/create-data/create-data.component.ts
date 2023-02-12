import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';
import { ApiHttpService } from 'src/app/core/services/api-http.service';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.scss']
})
export class CreateDataComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService,
    private router: Router,
  ) { }

  ngOnInit(): void {}

  onSubmit(userForm: NgForm): void {
    if (userForm.valid) {
      const body = {
        username: userForm.value.uname,
        firstName: userForm.value.fname,
        lastName: userForm.value.lname,
        email: userForm.value.email,
        age: userForm.value.age,
      };

      this.apiHttpService.post(
        this.apiEndpointsService.getUserEndpoint(),
        body
      ).subscribe({
        next: res => this.onSuccess(res, userForm),
        error: err => this.onError(err)
      });
    }
  }

  onSuccess(res: any, userForm: NgForm) {
    if (res.code === 201) {
      this.toastr.success('Your User Record Added Successfully!', 'User Added', {
        timeOut: 3000,
      });
      this.router.navigate(['/']);
    }
  }

  onError(error: any) {
    console.log(error);
    this.toastr.error('Some went wrong. please try again later!', 'Server Error', {
      timeOut: 3000,
    });
  }
}
