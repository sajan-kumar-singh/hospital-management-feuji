import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.errorMessage = '';
    this.http.post<any>('http://localhost:8080/api/auth/login', this.credentials)
      .subscribe({
        next: (response) => {
          // Redirect strictly based on the role string from the server
          if (response.role === 'PROVIDER') {
            this.router.navigate(['/provider-dashboard']);
          } else if (response.role === 'PAYER') {
            this.router.navigate(['/payer-dashboard']);
          } else {
            this.errorMessage = 'Unknown user role.';
          }
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Invalid credentials or connection error.';
        }
      });
  }
}