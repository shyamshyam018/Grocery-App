import { LoginComponent } from '../../pages/auth/login/login.component';
import { RegisterComponent } from '../../pages/auth/register/register.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule , RouterLink , RouterLinkActive  } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component'; 


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,RouterModule , RouterLink , RouterLinkActive, FooterComponent,LoginComponent,RegisterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
