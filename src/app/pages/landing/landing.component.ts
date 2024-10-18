import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component'; 
import { FooterComponent } from '../../components/footer/footer.component';  
import { LoginComponent } from '../../pages/auth/login/login.component';
import { RegisterComponent } from '../../pages/auth/register/register.component';
import { RouterModule , RouterLink , RouterLinkActive  } from '@angular/router';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,RouterModule , RouterLink , RouterLinkActive, FooterComponent,LoginComponent,RegisterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
