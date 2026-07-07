import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  showSidebar: boolean = true;

  constructor(private router: Router) {
    // Listen to navigation events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide sidebar if the current URL is '/login'
        this.showSidebar = event.url !== '/login' && event.url !== '/';
      }
    });
  }
}