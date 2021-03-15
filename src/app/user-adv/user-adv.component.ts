import { CloseRequest } from './close-request';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { AdvertisementDto } from './../advertisement/advertisement-dto';
import { AdvertisementService } from './../advertisement/advertisement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-adv',
  templateUrl: './user-adv.component.html',
  styleUrls: ['./user-adv.component.css']
})
export class UserAdvComponent implements OnInit {
  allAdvertisement: AdvertisementDto[];
  errormessage = "";
  showError = false;
  closeRequest: CloseRequest = new CloseRequest();
  constructor(private advertisementService: AdvertisementService, private router: Router) { }

  ngOnInit(): void {
    this.advertisementService.findByUser().subscribe(data => {
      this.allAdvertisement = data;
    });
  }
  edit(id: number) {
    this.router.navigate(['edit', id])
  }

  close(id: number) {
    this.closeRequest.id = id;
    this.advertisementService.close(this.closeRequest).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
    this.router.navigate(['home']);
  }

}
