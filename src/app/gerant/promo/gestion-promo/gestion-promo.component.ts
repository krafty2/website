import { Component } from '@angular/core';
import { PromoFormComponent } from '../promo-form/promo-form.component';
import { AllPromoComponent } from '../all-promo/all-promo.component';

@Component({
  selector: 'app-gestion-promo',
  standalone: true,
  imports: [
    PromoFormComponent,
    AllPromoComponent
  ],
  templateUrl: './gestion-promo.component.html',
  styleUrl: './gestion-promo.component.css'
})
export class GestionPromoComponent {

}
