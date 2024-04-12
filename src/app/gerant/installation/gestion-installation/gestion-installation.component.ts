import { Component } from '@angular/core';

import { InstallationListComponent } from '../installation-list/installation-list.component';

@Component({
  selector: 'app-gestion-installation',
  standalone: true,
  imports: [InstallationListComponent],
  templateUrl: './gestion-installation.component.html',
  styleUrl: './gestion-installation.component.css'
})
export class GestionInstallationComponent {

}
