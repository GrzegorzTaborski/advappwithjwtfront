import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementService } from './../advertisement/advertisement.service';
import { Component, OnInit } from '@angular/core';
import { AdvertisementDto } from '../advertisement/advertisement-dto';
import { Observable, Subscriber } from 'rxjs';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  advertisement: AdvertisementDto;
  advType: Array<string> = ['FURNITURE', 'ELECTRONICS', 'PART', 'OTHER'];
  constructor(private advertisementService: AdvertisementService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.advertisement = new AdvertisementDto();
    this.advertisementService.getAdvertisementById(this.id).subscribe(data => this.advertisement = data);
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
        this.advertisement.picture1 = d;
      } else if (picture === 2) {
        this.advertisement.picture2 = d;
      } else if (picture === 3) {
        this.advertisement.picture3 = d;
      } else if (picture === 4) {
        this.advertisement.picture4 = d;
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
  update(){
    this.advertisementService.update(this.advertisement).subscribe(data=>console.log(data),err=>console.log(err));
  }
}
