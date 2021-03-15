import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './auth/auth-interceptor.service';
import { AddNewAdvComponent } from './add-new-adv/add-new-adv.component';
import { HomeComponent } from './home/home.component';

import { AdvDetailsComponent } from './adv-details/adv-details.component';
import { CookieService } from 'ngx-cookie-service';
import { AgmCoreModule } from '@agm/core';
import { AccDetailsComponent } from './acc-details/acc-details.component';
import { UserAdvComponent } from './user-adv/user-adv.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SearchComponent } from './search/search.component';
import { ConfirmationSiteComponent } from './confirmation-site/confirmation-site.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddNewAdvComponent,
    HomeComponent,
    AdvDetailsComponent,
    AccDetailsComponent,
    UserAdvComponent,
    ChangepasswordComponent,
    SearchComponent,
    ConfirmationSiteComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [authInterceptorProviders, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
