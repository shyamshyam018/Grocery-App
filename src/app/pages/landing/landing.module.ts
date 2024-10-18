import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { NavbarComponent } from '../../components/navbar/navbar.component'; 
import { FooterComponent } from '../../components/footer/footer.component'; 
import { LoginComponent } from '../../pages/auth/login/login.component';
import { RegisterComponent } from '../../pages/auth/register/register.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet , RouterLink , RouterLinkActive  } from '@angular/router';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    NavbarComponent, 
    FooterComponent ,
    LoginComponent,
    RegisterComponent,
    RouterLink,
    RouterModule,
    RouterOutlet,
    RouterLinkActive
  ]
})
export class LandingModule { }
