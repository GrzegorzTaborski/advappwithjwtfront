
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth-service';

import { RegistrationRequest } from '../auth/register-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message = "";
  showMessage = false;
  registerRequest: RegistrationRequest = new RegistrationRequest();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.authService.register(this.registerRequest).subscribe(data => {
      this.message = data.message;
      this.showMessage = true;
    }, err => {
      console.log(err);
      this.message = err.error.message;
      this.showMessage = true;
    }
    );
  }
}
