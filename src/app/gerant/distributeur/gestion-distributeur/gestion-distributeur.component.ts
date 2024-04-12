import { Component } from '@angular/core';

import { DistributeurFormComponent } from '../distributeur-form/distributeur-form.component';
import { DistributeurListComponent } from '../distributeur-list/distributeur-list.component';
import { DistributeurCarteComponent } from '../distributeur-carte/distributeur-carte.component';

@Component({
  selector: 'app-gestion-distributeur',
  standalone: true,
  imports: [
    DistributeurFormComponent,
    DistributeurListComponent,
    DistributeurCarteComponent,
  ],
  templateUrl: './gestion-distributeur.component.html',
  styleUrl: './gestion-distributeur.component.css',
})
export class GestionDistributeurComponent {}
