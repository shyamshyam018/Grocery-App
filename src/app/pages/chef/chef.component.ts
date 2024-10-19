// src/app/pages/chef/chef.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-chef',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss']
})
export class ChefComponent {}
