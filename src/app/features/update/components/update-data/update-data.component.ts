import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent implements OnInit {

  /**
   * This "userExist" property will be true,
   * when the entered username exists in our database.
   * @property
   * @type {boolean}
  */
  userExist = false;

  constructor() { }

  ngOnInit(): void {}

  searchUsername(userSearchForm: NgForm) {
    if (userSearchForm.valid) {
      this.userExist = true;
    }
  }

  onSubmit(userForm: NgForm): void {
    console.log(userForm.value);
  }
}
