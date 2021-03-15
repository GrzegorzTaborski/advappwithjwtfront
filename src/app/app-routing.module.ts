import { EditComponent } from './edit/edit.component';
import { ConfirmationSiteComponent } from './confirmation-site/confirmation-site.component';
import { SearchComponent } from './search/search.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AccDetailsComponent } from './acc-details/acc-details.component';
import { UserAdvComponent } from './user-adv/user-adv.component';
import { AuthGuardService } from './auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddNewAdvComponent } from './add-new-adv/add-new-adv.component';
import { HomeComponent } from './home/home.component';
import { AdvDetailsComponent } from './adv-details/adv-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'add', component: AddNewAdvComponent, canActivate: [AuthGuardService] },
  { path: 'details/:id', component: AdvDetailsComponent },
  { path: 'userAdv', component: UserAdvComponent, canActivate: [AuthGuardService] },
  { path: 'accDetails', component: AccDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'changepassword', component: ChangepasswordComponent, canActivate: [AuthGuardService] },
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuardService] },
  { path: 'search/:range/:type', component: SearchComponent },
  { path: 'confirm/:token', component: ConfirmationSiteComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
