
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth-service';

import { RegistrationRequest } from "../auth/RegistrationRequest";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message = "";
  showMessage = false;
  errorMessage = "";
  showError = false;
  confirmationPassword = "";
  registerRequest: RegistrationRequest = new RegistrationRequest();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.confirmationPassword === this.registerRequest.password) {

      this.authService.register(this.registerRequest).subscribe(data => {
        this.showError = true;
        this.message = data.message;
        this.showMessage = true;
      }, err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.showError = true;
      }
      );
    } else {
      this.errorMessage = "Password are not same";
      this.showError = true;
    }
  }
}
