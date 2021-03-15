import { AuthService } from './../auth/auth-service';
import { Component, OnInit } from '@angular/core';
import { ChangePasswordRequest } from './change-password-request';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  message = "";
  showMessage = false;
  errorMessage = "";
  showError = false;

  constructor(private authService:AuthService) { }
  changePasswordRequest:ChangePasswordRequest = new ChangePasswordRequest();
  confirmationPassword:string;

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.confirmationPassword===this.changePasswordRequest.changedPassword){
      this.authService.changePassword(this.changePasswordRequest).subscribe(data=>{
        this.showError = false;
        this.message = data.message;
        this.showMessage = true;
      },err=>{
        this.errorMessage = err.error.message;
        this.showError = true;
      });
    }else{
      this.errorMessage = "Password are not the same";
      this.showError = true;
    }
  }
}
