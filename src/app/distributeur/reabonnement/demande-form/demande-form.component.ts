import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';

@Component({
  selector: 'app-demande-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './demande-form.component.html',
  styleUrl: './demande-form.component.css',
})
export class DemandeFormComponent {
  reaboForm!: FormGroup;

  dateJ: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private distribService: CanalPlusServiceService
  ) {}

  ngOnInit() {
    console.log(this.formatDate(this.dateJ));

    this.reaboForm = this.fb.group({
      typeDemande: ['reabonnement'],
      duree: [''],
      bouquet: [''],
      numero_decodeur: [''],
      date_demande: [this.formatDate(this.dateJ)],
      pourcentage_percu: ['600'],
      statut:['En attente']
    });
  }

  formatDate(date: any) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  handleSubmit() {

    console.log(this.reaboForm.value);
    this.distribService.createDReabo(this.reaboForm.value).subscribe(() => {
      console.log('reussi');
      window.location.reload();
    });
  }
}
