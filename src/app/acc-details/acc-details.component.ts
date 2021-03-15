import { TokenStorageService } from './../auth/token-storage-service';
import { Router } from '@angular/router';
import { UserDto } from './../auth/user-dto';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-acc-details',
  templateUrl: './acc-details.component.html',
  styleUrls: ['./acc-details.component.css']
})
export class AccDetailsComponent implements OnInit {
  message = "";
  showMessage = false;
  errorMessage = "";
  showError = false;
  id : number;

  userDetails : UserDto = new UserDto();
  constructor(private authService :AuthService, private router :Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.authService.getuserdetails().subscribe(data=>{
      this.userDetails.email = data.email;
      this.userDetails.firstName = data.firstName;
      this.userDetails.lastName = data.lastName;
      this.id = data.id;
      this.userDetails.id = this.id;
    },err=>{
      console.log(err.message);
    })
  }
  onSubmit(){
    this.authService.updateDetail(this.userDetails).subscribe(data=>{
      this.message=data.message;
      this.showMessage = true;
    },err=>{
      this.errorMessage = err.error.message;
      this.showError = true;

    })
  }
  goToPasswordChanger(){
    this.router.navigate(['changepassword'])
  }

}
