import { TokenStorageService } from './auth/token-storage-service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private tokenStorageService: TokenStorageService){};

  isUserLoggedIn():boolean{
    return this.tokenStorageService.isLogged();
  }
  goToLogin(){
    this.router.navigate(['login']);
  }
  goToRegister(){
    this.router.navigate(['register']);
  }
  logout(){
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  goToAdd(){
    this.router.navigate(['add'])
  }
  homeRedirect(){
    this.router.navigate(['home'])
  }
}
