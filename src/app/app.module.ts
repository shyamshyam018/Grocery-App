import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'; 
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet , RouterLink , RouterLinkActive  } from '@angular/router';
import { AppComponent } from './app.component'; 
import { AdminModule } from './pages/admin/admin.module';
import { ChefModule } from './pages/chef/chef.module';
// import { NavbarComponent } from './components/navbar/navbar.component';  
// import { FooterComponent } from './components/footer/footer.component';  
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AdminModule,
    ChefModule,
    // NavbarComponent,  
    // FooterComponent,
    AppComponent ,
    LoginComponent ,
    RegisterComponent,
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
