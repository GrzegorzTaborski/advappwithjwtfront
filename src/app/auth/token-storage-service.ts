import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_ROLE = 'auth-role';
const USER_ID = 'user-id';
const USER_EMAIL = 'user-email'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  private isUserLoggedIn = false;

  signOut(): void {
    window.sessionStorage.clear();
    this.isUserLoggedIn = false;
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    this.isUserLoggedIn = true;
  }
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public saveRole(role: string): void {
    window.sessionStorage.removeItem(USER_ROLE);
    window.sessionStorage.setItem(USER_ROLE, role);
  }
  public getRole(): string {
    return sessionStorage.getItem(USER_ROLE);
  }
  public saveId(id: string): void {
    window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.setItem(USER_ID, id);
  }
  public getId(): string {
    return sessionStorage.getItem(USER_ID);
  }
  public saveEmail(email: string): void {
    window.sessionStorage.removeItem(USER_EMAIL);
    window.sessionStorage.setItem(USER_EMAIL, email);
  }
  public getEmail(): string {
    return sessionStorage.getItem(USER_EMAIL);
  }
  isLogged(): boolean {
    return this.isUserLoggedIn;
  }
}
