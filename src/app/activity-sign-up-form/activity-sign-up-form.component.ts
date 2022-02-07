import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, NgForm} from '@angular/forms';
import { UserInfo } from '../Shared/user-info.modal';
import { SharedApiService } from '../Shared/shared-api.service';



@Component({
  selector: 'app-activity-sign-up-form',
  templateUrl: './activity-sign-up-form.component.html',
  styleUrls: ['./activity-sign-up-form.component.css']
})
export class ActivitySignUpFormComponent implements OnInit {

  user = new UserInfo();
 
  constructor(
    private service: SharedApiService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    
  }

  ngOnInit() {
   this.resetForm();
  }
   
  onSubmit(userSignUpForm: NgForm) {
    userSignUpForm.value.UserID = -1;
    userSignUpForm.value.SignUpDate=new Date();

    this.service.SignUpUser(userSignUpForm.value).subscribe(res=>{
      alert("Data Added successfully");
      this.resetForm(userSignUpForm);
    },(error)=>{
      // Currently logging error in console so we can track if there will any error in the application.
      console.log(error);
      alert("Something went wrong please contact to administrator");
    })

  }

  resetForm(userSignUpForm?:NgForm){
    if(userSignUpForm != null){
      userSignUpForm.reset();
    }
   
    var currentDate = new Date();
    this.user = {
      UserID:-1,
      FirstName:'',
      LastName:'',
      EmailAddress:'',
      StartDate:currentDate,
      Experience:0,
      Activity:'',
      Comments:''
    };

  }

}
