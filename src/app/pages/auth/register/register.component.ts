import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component'; 
import { LoginComponent } from '../login/login.component';
import { RouterOutlet, RouterModule , RouterLink , RouterLinkActive  } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,RouterModule , RouterLink , RouterLinkActive,LoginComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
