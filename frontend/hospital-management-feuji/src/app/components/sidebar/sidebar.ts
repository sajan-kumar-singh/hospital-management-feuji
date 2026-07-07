import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent implements OnInit {
  userRole: string | null = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Basic validation check
    // this.userRole = sessionStorage.getItem('userRole');
    // if (!this.userRole) {
    //   this.router.navigate(['/login']);
    // }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}