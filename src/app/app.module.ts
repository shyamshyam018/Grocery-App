import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';  // Adjust if necessary
import { AppComponent } from './app.component'; 
import { AdminModule } from './pages/admin/admin.module';
import { ChefModule } from './pages/chef/chef.module';
import { NavbarComponent } from './components/navbar/navbar.component';  // Correct path
import { FooterComponent } from './components/footer/footer.component';  // Correct path

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ChefModule,
    NavbarComponent,  // Include here
    FooterComponent   // Include here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
