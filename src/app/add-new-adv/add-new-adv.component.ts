import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { AdvertisementRequest } from '../advertisement/advertisement-request';

import { AdvertisementService } from '../advertisement/advertisement.service';

@Component({
  selector: 'app-add-new-adv',
  templateUrl: './add-new-adv.component.html',
  styleUrls: ['./add-new-adv.component.css']
})
export class AddNewAdvComponent implements OnInit {

  advType: Array<string> = ['FURNITURE', 'ELECTRONICS', 'PART', 'OTHER'];

  advertisementRequest: AdvertisementRequest = new AdvertisementRequest();
  constructor(private advertisementService: AdvertisementService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (!navigator.geolocation)
      console.log('location not suppoerted TODO')
    else {
      navigator.geolocation.getCurrentPosition((position) => {
        this.advertisementRequest.latitude = position.coords.latitude;
        this.advertisementRequest.longitude = position.coords.longitude;
      })
    }
  }
  onFileSelected1($event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file, 1);
  }
  onFileSelected2($event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file, 2);
  }
  onFileSelected3($event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file, 3);
  }
  onFileSelected4($event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file, 4);
  }
  convertToBase64(file: File, picture: number): any {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);

    });
    observable.subscribe(d => {
      if (picture === 1) {
        this.advertisementRequest.picture1 = d;
      } else if (picture === 2) {
        this.advertisementRequest.picture2 = d;
      } else if (picture === 3) {
        this.advertisementRequest.picture3 = d;
      } else if (picture === 4) {
        this.advertisementRequest.picture4 = d;
      }
    })
  }


  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete;
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }

  add() {

    this.advertisementService.addNew(this.advertisementRequest).subscribe(data => { console.log(data) }, err => console.log(err))
    setTimeout(() =>
{
    this.router.navigate(['home']);
},
1500);
  }

}
