import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementDto } from '../advertisement/advertisement-dto';
import { AdvertisementService } from '../advertisement/advertisement.service';
import { SearchRequest } from './search-request';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchRequest: SearchRequest = new SearchRequest();
  searchedAdvertisement: AdvertisementDto[];
  constructor(private advertisementService: AdvertisementService,
    private router: Router, private route: ActivatedRoute) { }

  searchingEnable: boolean;

  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('location not suppoerted TODO')
      this.searchingEnable = false;
    }
    else {
      navigator.geolocation.getCurrentPosition((position) => {
        this.searchingEnable = true;
        this.searchRequest.userLatitude = position.coords.latitude;
        this.searchRequest.userLongtitude = position.coords.longitude;
        this.searchRequest.range = this.route.snapshot.params['range'];
        this.searchRequest.typeSelected = this.route.snapshot.params['type'];
        this.advertisementService.search(this.searchRequest).subscribe(data=>this.searchedAdvertisement = data);
      })
    }

  }
  openDetails(id:number){
    this.router.navigate(['details',id])
  }

}
