import { TokenStorageService } from './../auth/token-storage-service';
import { Component, OnInit } from '@angular/core';
import { AuthRequest } from '../auth/auth-request';
import { AuthService } from '../auth/auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authRequest:AuthRequest = new AuthRequest();
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.isLogged()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getRole();
    }
  }
  onSubmit(): void {
    this.authService.login(this.authRequest).subscribe(
      data => {
        this.tokenStorage.saveToken(data.tokenType +" "+ data.accessToken);
        this.tokenStorage.saveId(data.id.toString());
        this.tokenStorage.saveRole(data.role);
        this.tokenStorage.saveEmail(data.email);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getRole();
        this.router.navigate(['home'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

}
