import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { Promo } from '../../../_models/offre';

@Component({
  selector: 'app-offre-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './offre-form.component.html',
  styleUrl: './offre-form.component.css',
})
export class OffreFormComponent {
  offreForm!: FormGroup;

  constructor(private fb: FormBuilder,private canalService:CanalPlusServiceService) {}

  ngOnInit() {
    this.offreForm = this.fb.group({
      bouquet: [''],
      montant: [''],
      promo:[Promo.STANDARD]
    });
  }

  handleSubmit() {
    console.log(this.offreForm.value);
    this.canalService.createOffre(this.offreForm.value).subscribe(()=>{
      console.log('reussi');
    })
  }
}
