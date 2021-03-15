import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-confirmation-site',
  templateUrl: './confirmation-site.component.html',
  styleUrls: ['./confirmation-site.component.css']
})
export class ConfirmationSiteComponent implements OnInit {
  token: string;
  message:string;
  showError = false;
  showMessage = false;

  constructor(private router: Router, private route: ActivatedRoute, private authService:AuthService) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.params['token'];
    this.authService.confirmToken(this.token).subscribe(data=>{
      this.message = data.message;
      this.showError = false;
      this.showMessage = true;
     },err=>{
       this.message = err.error.message;
       this.showMessage = false;
       this.showError = true;
     })


  }

}
