import { Component } from '@angular/core';

import { DemandeFormComponent } from '../demande-form/demande-form.component';
import { ReabonnmentListDistribComponent } from '../reabonnment-list-distrib/reabonnment-list-distrib.component';

@Component({
  selector: 'app-gestion-reabonnement-distrib',
  standalone: true,
  imports: [DemandeFormComponent, ReabonnmentListDistribComponent],
  templateUrl: './gestion-reabonnement-distrib.component.html',
  styleUrl: './gestion-reabonnement-distrib.component.css',
})
export class GestionReabonnementDistribComponent {}
