import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { RouterModule } from '@angular/router'; // Added RouterModule

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule], // Added RouterModule
  template: `
    <h2>Profile</h2>
    <div *ngIf="auth.getUser()">
      <p><strong>Name:</strong> {{ auth.getUser().name }}</p>
      <p><strong>Email:</strong> {{ auth.getUser().email }}</p>
    </div>
    <a routerLink="/">Back to Login</a>
  `
})
export class ProfileComponent {
  constructor(public auth: AuthService) {}
}