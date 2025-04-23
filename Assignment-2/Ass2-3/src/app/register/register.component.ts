import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], // Added RouterModule
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="onSubmit()">
      <input [(ngModel)]="name" name="name" placeholder="Name" required>
      <input [(ngModel)]="email" name="email" placeholder="Email" required>
      <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required>
      <button type="submit">Register</button>
    </form>
    <p *ngIf="success" style="color: green">{{ success }}</p>
    <a routerLink="/">Already have an account? Login</a>
  `
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  success = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.register({ name: this.name, email: this.email, password: this.password });
    this.success = 'Registration successful! Redirecting...';
    setTimeout(() => this.router.navigate(['/']), 1500);
  }
}