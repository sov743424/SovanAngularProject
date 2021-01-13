import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { HomeComponent } from '../app/home/home.component';
import { ContactComponent } from '../app/contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'team',component:TeamComponent},
  {path:'contact',component:ContactComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'service',component:ServiceComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
