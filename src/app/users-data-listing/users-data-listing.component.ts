import { Component, OnInit } from '@angular/core';
import { SharedApiService } from '../Shared/shared-api.service';

@Component({
  selector: 'app-users-data-listing',
  templateUrl: './users-data-listing.component.html',
  styleUrls: ['./users-data-listing.component.css']
})
export class UsersDataListingComponent implements OnInit {

  constructor(
    private service: SharedApiService
  ) { }

  UsersList:any=[];
  ngOnInit(): void {
    this.refreshUsersList();
  }

  refreshUsersList(){
    this.service.getAllUsersData().subscribe((data)=>{
      this.UsersList = data;
    }, (error) => { 
      // Currently logging error in console so we can track if there will any error in the application.
      console.log(error);
      alert("Something went wrong please contact to administrator");
    });
  }
}
