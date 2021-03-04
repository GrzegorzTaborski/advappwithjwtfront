
import { TokenStorageService } from './../auth/token-storage-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdvertisementDto } from './advertisement-dto';


@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  private ADVERTISEMENT_BASE_URL = "http://localhost:8090/advertisement";

  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorageService,) { }



  getAdvertisementList(): Observable<AdvertisementDto[]> {
    return this.httpClient.get<AdvertisementDto[]>(`${this.ADVERTISEMENT_BASE_URL}/home`);
  }
  getAdvertisementById(id: number): Observable<AdvertisementDto> {
    return this.httpClient.get<AdvertisementDto>(`${this.ADVERTISEMENT_BASE_URL}/${id}`);

  }

  addNew(advertisementRequest): Observable<any> {
    const httpHeaders = new HttpHeaders({'Authorization':this.tokenStorage.getToken()});
    return this.httpClient.post(`${this.ADVERTISEMENT_BASE_URL}/addnew`, advertisementRequest,{headers: httpHeaders});
  }
}
