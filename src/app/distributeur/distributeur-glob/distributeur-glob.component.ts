import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SideBarDistribComponent } from '../side-bar-distrib/side-bar-distrib.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-distributeur-glob',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    SideBarDistribComponent,
  ],
  templateUrl: './distributeur-glob.component.html',
  styleUrl: './distributeur-glob.component.css',
})
export class DistributeurGlobComponent {
  gerant =false;

  mode:any = "side";

  ngOnInit(){
    if(!this.gerant){
      this.mode = "over";
    }
  }
}
