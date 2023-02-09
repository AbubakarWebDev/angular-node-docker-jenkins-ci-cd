import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.scss']
})
export class DeleteDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(userSearchForm: NgForm) {
    console.log(userSearchForm);
  }
}
