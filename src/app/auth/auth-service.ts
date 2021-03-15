
import { UserDto } from './user-dto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthRequest } from './auth-request';
import { JwtResponse } from './jwt-response';
import { Observable } from 'rxjs';
import { RegistrationRequest } from "./RegistrationRequest";
import { TokenStorageService } from './token-storage-service';
import { ChangePasswordRequest } from '../changepassword/change-password-request';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private APP_END_POINT = 'http://localhost:8090';

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }


  login(authRequest: AuthRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.APP_END_POINT + '/login', authRequest);
  }
  register(registrationRequest: RegistrationRequest): Observable<any> {
    return this.http.post<any>(this.APP_END_POINT + '/register', registrationRequest);
  }

  getuserdetails(): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Authorization': this.tokenStorage.getToken() });
    return this.http.post<any>(this.APP_END_POINT + '/user/getuserdetails', { headers: httpHeaders });
  }

  updateDetail(userDto: UserDto): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Authorization': this.tokenStorage.getToken() });
    return this.http.put<any>(this.APP_END_POINT + '/user/changedetails', userDto, { headers: httpHeaders });
  }

  changePassword(changePasswordRequest: ChangePasswordRequest): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Authorization': this.tokenStorage.getToken() });
    return this.http.put<any>(this.APP_END_POINT + '/user/changepassword', changePasswordRequest, { headers: httpHeaders });
  }
  confirmToken(token): Observable<any> {
    return this.http.post<any>(this.APP_END_POINT + '/register/confirm', token);

  }
}
