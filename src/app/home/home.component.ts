import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AgmCoreModule} from '@agm/core'
import { AdvertisementService } from '../advertisement/advertisement.service';
import { AdvertisementDto } from '../advertisement/advertisement-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allAdvertisement: AdvertisementDto[];

  constructor(private advertisementService: AdvertisementService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAdvertisement();
  }
  showDetails(){}

  private getAdvertisement(){
    this.advertisementService.getAdvertisementList().subscribe(data=>
      {this.allAdvertisement = data;});
  }
  openDetails(id:number){
    this.router.navigate(['details',id])
  }
}
