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
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'add', component: AddNewAdvComponent,canActivate:[AuthGuardService]},
  {path: 'details/:id', component: AdvDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
