import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../_service/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-side-bar-distrib',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,MatButtonModule],
  templateUrl: './side-bar-distrib.component.html',
  styleUrl: './side-bar-distrib.component.css',
})
export class SideBarDistribComponent {
  date: Date = new Date();
  constructor(private authService: AuthService ,private router:Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
