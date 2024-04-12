import { Component } from '@angular/core';

import { ReabonnementAttenteComponent } from '../../gerant/dashbord/reabonnement-attente/reabonnement-attente.component';
import { InstallationAttenteComponent } from '../../gerant/dashbord/installation-attente/installation-attente.component';

@Component({
  selector: 'app-dashbord-distrib',
  standalone: true,
  imports: [ReabonnementAttenteComponent,InstallationAttenteComponent],
  templateUrl: './dashbord-distrib.component.html',
  styleUrl: './dashbord-distrib.component.css'
})
export class DashbordDistribComponent {

}
