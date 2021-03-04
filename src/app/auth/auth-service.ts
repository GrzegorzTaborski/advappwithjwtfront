
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthRequest } from './auth-request';
import { JwtResponse } from './jwt-response';
import { Observable } from 'rxjs';
import { RegistrationRequest } from "./RegistrationRequest";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private APP_END_POINT = 'http://localhost:8090';

  constructor(private http: HttpClient) { }


  login(authRequest: AuthRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.APP_END_POINT + '/login', authRequest);
  }
  register(registrationRequest: RegistrationRequest): Observable<any> {
    return this.http.post<any>(this.APP_END_POINT + '/register', registrationRequest);
  }
}
