import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { SideBarComponent } from './gerant/side-bar/side-bar.component';
import { SideBarDistribComponent } from './distributeur/side-bar-distrib/side-bar-distrib.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    SideBarComponent,
    SideBarDistribComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'website';

  gerant =false;

  mode:any = "side";

  ngOnInit(){
    if(!this.gerant){
      this.mode = "over";
    }
  }
}
