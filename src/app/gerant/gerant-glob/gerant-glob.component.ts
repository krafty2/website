import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SideBarComponent } from '../side-bar/side-bar.component';


@Component({
  selector: 'app-gerant-glob',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    SideBarComponent,
   ],
  templateUrl: './gerant-glob.component.html',
  styleUrl: './gerant-glob.component.css'
})
export class GerantGlobComponent {

  gerant =false;

  mode:any = "side";

  ngOnInit(){
    if(!this.gerant){
      this.mode = "over";
    }
  }
}
