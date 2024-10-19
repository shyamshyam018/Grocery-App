import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet , RouterLink , RouterLinkActive  } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule , RouterLink , RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class AdminDashboardComponent {
  // Your component logic here
}
