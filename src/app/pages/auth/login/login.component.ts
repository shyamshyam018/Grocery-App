import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component'; 
import { RegisterComponent } from '../register/register.component';
import { RouterOutlet, RouterModule , RouterLink , RouterLinkActive  } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,RouterModule , RouterLink , RouterLinkActive,LoginComponent,RegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
