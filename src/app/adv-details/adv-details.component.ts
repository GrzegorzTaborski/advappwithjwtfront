import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementDto } from '../advertisement/advertisement-dto';
import { AdvertisementService } from '../advertisement/advertisement.service';

@Component({
  selector: 'app-adv-details',
  templateUrl: './adv-details.component.html',
  styleUrls: ['./adv-details.component.css']
})
export class AdvDetailsComponent implements OnInit {
  id: number;
  advertisement: AdvertisementDto;
  constructor(private advertisementService: AdvertisementService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.advertisement = new AdvertisementDto();
    this.advertisementService.getAdvertisementById(this.id).subscribe(data => this.advertisement = data);
  }
}
