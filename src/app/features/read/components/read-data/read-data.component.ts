import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { UserFormData } from 'src/app/shared/models/user-form-data';
import { DeleteUserModalComponent } from '../delete-user-modal/delete-user-modal.component';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';

@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.scss']
})
export class ReadDataComponent implements OnInit {

  users: any = [];
  modalRef: any;
  currentUsername: string = "";
  openEditModal: boolean = false;
  openDeleteModal: boolean = false;

  constructor(
    private toastr: ToastrService,
    private modalService: NgbModal,
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.apiHttpService.get(
      this.apiEndpointsService.getUserEndpoint()
    ).subscribe(res => {
      if (res.code === 200) {
        this.users = res.results.data;
      }
    });
  }

  handleEdit(username: string) {
    this.currentUsername = username;

    this.apiHttpService.get(
      this.apiEndpointsService.getUserByNameEndpoint(this.currentUsername)
    ).subscribe(res => {
      if (res.code === 200) {
        this.modalRef = this.modalService.open(EditUserModalComponent);

        this.modalRef.componentInstance.user = res.results.data;
        this.modalRef.componentInstance.handleSubmit.subscribe((event: UserFormData) => {
          this.updateUserRecord(event)
        });
      }
    });
  }

  updateUserRecord(userFormData: UserFormData) {
    const body = {
      username: userFormData.uname,
      firstName: userFormData.fname,
      lastName: userFormData.lname,
      email: userFormData.email,
      age: userFormData.age,
    };

    this.apiHttpService.put(
      this.apiEndpointsService.getUserByNameEndpoint(this.currentUsername),
      body
    ).subscribe({
      next: res => {
        if (res.code === 200) {
          this.getAllUsers();
          this.modalRef.close();
          this.toastr.success('User Records has been successfully updated!', 'Update Success', {
            timeOut: 3000,
          });
        }
        else if (res.error) {
          this.toastr.error(res.error.message, 'Server Error', {
            timeOut: 3000,
          });
        }
      },
      error: (error) => {
        this.toastr.error("Something Went Wrong. please try again", 'Server Error', {
          timeOut: 3000,
        });
      }
    });
  }

  handleDelete(username: string) {
    this.currentUsername = username;
    this.modalRef = this.modalService.open(DeleteUserModalComponent);

    this.modalRef.componentInstance.handleSubmit.subscribe(() => {

      this.apiHttpService.delete(
        this.apiEndpointsService.getUserByNameEndpoint(this.currentUsername)
      ).subscribe({
        next: res => {
          if (res.code === 200) {
            this.getAllUsers();
            this.modalRef.close();
            this.toastr.success('User Record has been successfully Deleted!', 'Delete Success', {
              timeOut: 3000,
            });
          }
        },
        error: (error) => {
          this.toastr.error("Something Went Wrong. please try again", 'Server Error', {
            timeOut: 3000,
          });
        }
      });
    });
  }
}
