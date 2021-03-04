import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const TOKEN_KEY = 'auth-token';
const USER_ROLE = 'auth-role';
const USER_ID = 'user-id';
const USER_EMAIL = 'user-email'
const LOGGED_IN = 'is-user-logged';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private cookie: CookieService) { }

  signOut(): void {
    window.sessionStorage.clear();
    this.cookie.set(LOGGED_IN, "false");
    this.cookie.deleteAll();


  }
  public saveToken(token: string): void {

    this.cookie.delete(TOKEN_KEY);
    this.cookie.set(TOKEN_KEY, token);
    this.cookie.set(LOGGED_IN, "true");

  }
  public getToken(): string {
    return this.cookie.get(TOKEN_KEY);
  }
  public saveRole(role: string): void {
    this.cookie.delete(USER_ROLE);
    this.cookie.set(USER_ROLE, role);
  }
  public getRole(): string {
    return this.cookie.get(USER_ROLE);
  }
  public saveId(id: string): void {
    this.cookie.delete(USER_ID);
    this.cookie.set(USER_ID, id);
  }
  public getId(): string {
    return this.cookie.get(USER_ID);
  }
  public saveEmail(email: string): void {
    this.cookie.delete(USER_EMAIL);
    this.cookie.set(USER_EMAIL, email);
  }
  public getEmail(): string {
    return this.cookie.get(USER_EMAIL);
  }
  isLogged(): boolean {
     if((this.cookie.get(LOGGED_IN)==="true")){
       return true;
     }
     else{
       return false;
     };
  }
}
