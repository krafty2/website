import { Component } from '@angular/core';

import { ReabonnementListComponent } from '../reabonnement-list/reabonnement-list.component';

@Component({
  selector: 'app-gestion-reabonnement',
  standalone: true,
  imports: [ReabonnementListComponent],
  templateUrl: './gestion-reabonnement.component.html',
  styleUrl: './gestion-reabonnement.component.css',
})
export class GestionReabonnementComponent {}
