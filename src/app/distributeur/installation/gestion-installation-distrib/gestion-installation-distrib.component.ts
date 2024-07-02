import { Component } from '@angular/core';

import { DemandeInstallationFormComponent } from '../demande-installation-form/demande-installation-form.component';
import { InstallationListDistribComponent } from '../installation-list-distrib/installation-list-distrib.component';
import { RecrutementListeComponent } from '../../installation-with-parabole/recrutement-liste/recrutement-liste.component';

@Component({
  selector: 'app-gestion-installation-distrib',
  standalone: true,
  imports: [
    DemandeInstallationFormComponent,
    InstallationListDistribComponent,
    RecrutementListeComponent,
  ],
  templateUrl: './gestion-installation-distrib.component.html',
  styleUrl: './gestion-installation-distrib.component.css',
})
export class GestionInstallationDistribComponent {}
