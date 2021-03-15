import { TokenStorageService } from './auth/token-storage-service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private tokenStorageService: TokenStorageService) { };
  user: string;
  advType: Array<string> = ['FURNITURE', 'ELECTRONICS', 'PART', 'OTHER'];
  rangeOptions: Array<number> = [5000.0, 10000.0, 15000.0]
  typeSelected:string;
  range:number;
  isUserLoggedIn(): boolean {
    if (this.tokenStorageService.isLogged()) {
      this.user = this.tokenStorageService.getEmail();
    }
    return this.tokenStorageService.isLogged();
  }

  goToUserAdv() {
    this.router.navigate(['userAdv']);
  }
  goToDetails() {
    this.router.navigate(['accDetails']);
  }
  goToLogin() {
    this.router.navigate(['login']);
  }
  goToRegister() {
    this.router.navigate(['register']);
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  goToAdd() {
    this.router.navigate(['add'])
  }
  homeRedirect() {
    this.router.navigate(['home'])
  }
  search(){
    this.typeSelected;
    this.router.navigate(['search/',this.range,this.typeSelected])
  }
}
