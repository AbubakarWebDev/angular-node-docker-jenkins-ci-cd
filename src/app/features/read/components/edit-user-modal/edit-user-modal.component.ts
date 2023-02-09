import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss']
})
export class EditUserModalComponent implements OnInit {
  @Input() user: any;
  @Output() handleSubmit: EventEmitter<any> = new EventEmitter();
  @ViewChild('userEditForm') userForm: any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    // Note that we are using the setTimeout That is because the form controls are yet initialized when the OnInit is fired. We will get the following error message. There are no form controls registered with this group yet. If you’re using ngModel, you may want to check next tick (e.g. use setTimeout).
    setTimeout(() => {
      this.userForm.setValue({
        uname: this.user.username,
        fname: this.user.firstName,
        lname: this.user.lastName,
        email: this.user.email,
        age: this.user.age,
      });
    });
  }

  submitForm(userEditForm: NgForm) {
    if (userEditForm.valid) {
      this.handleSubmit.emit(userEditForm.value);
    }
  }
}
