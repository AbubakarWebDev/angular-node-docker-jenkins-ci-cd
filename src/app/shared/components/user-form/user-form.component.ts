import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserFormData } from '../../models/user-form-data';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() submitBtnText: String;
  @Input() formData: UserFormData = new UserFormData();
  @Output() submitForm: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  @ViewChild('userCreateForm') userForm: any;

  constructor() {
    this.submitBtnText = "Create Record";
  }

  ngOnInit(): void {
    // Note that we are using the setTimeout That is because the form controls are yet initialized when the OnInit is fired. We will get the following error message. There are no form controls registered with this group yet. If you’re using ngModel, you may want to check next tick (e.g. use setTimeout).
    setTimeout(() => {
      this.userForm.setValue(this.formData); 
    });
  }

  onSubmit(userCreateForm: NgForm) {
    this.submitForm.emit(userCreateForm);
  }
}
