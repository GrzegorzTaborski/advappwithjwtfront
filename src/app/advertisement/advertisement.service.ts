import { SearchRequest } from './../search/search-request';

import { TokenStorageService } from './../auth/token-storage-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdvertisementDto } from './advertisement-dto';
import { CloseRequest } from '../user-adv/close-request';


@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  private ADVERTISEMENT_BASE_URL = "http://localhost:8090/advertisement";

  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorageService) { }



  getAdvertisementList(): Observable<AdvertisementDto[]> {
    return this.httpClient.get<AdvertisementDto[]>(`${this.ADVERTISEMENT_BASE_URL}/home`);
  }
  getAdvertisementById(id: number): Observable<AdvertisementDto> {
    return this.httpClient.get<AdvertisementDto>(`${this.ADVERTISEMENT_BASE_URL}/${id}`);

  }

  addNew(advertisementRequest): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Authorization': this.tokenStorage.getToken() });
    return this.httpClient.post(`${this.ADVERTISEMENT_BASE_URL}/addnew`, advertisementRequest, { headers: httpHeaders });
  }
  search(searchRequest: SearchRequest): Observable<AdvertisementDto[]> {
    return this.httpClient.post<AdvertisementDto[]>(this.ADVERTISEMENT_BASE_URL + '/searchbyrange', searchRequest);
  }
  findByUser(): Observable<AdvertisementDto[]> {
    const httpHeaders = new HttpHeaders({ 'Authorization': this.tokenStorage.getToken() });
    return this.httpClient.post<AdvertisementDto[]>(this.ADVERTISEMENT_BASE_URL + '/getbyuser', { headers: httpHeaders });
  }
  close(closeRequest: CloseRequest): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Authorization': this.tokenStorage.getToken() });
    return this.httpClient.post<any>(this.ADVERTISEMENT_BASE_URL + '/close', closeRequest, { headers: httpHeaders });
  }
  update(advertisement: AdvertisementDto): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Authorization': this.tokenStorage.getToken() });
    return this.httpClient.put(this.ADVERTISEMENT_BASE_URL + '/update', advertisement, { headers: httpHeaders });
  }
}
