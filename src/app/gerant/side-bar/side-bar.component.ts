import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../_service/auth.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  date: Date = new Date();

  constructor(private authService: AuthService,private router:Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
