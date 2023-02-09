import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss']
})
export class DeleteUserModalComponent implements OnInit {

  @Output() handleSubmit: EventEmitter<any> = new EventEmitter();
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {}
}
