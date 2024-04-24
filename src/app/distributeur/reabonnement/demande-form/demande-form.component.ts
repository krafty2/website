import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { Offre } from '../../../_models/offre';
import { CommonModule } from '@angular/common';
import { Status } from '../../../_models/demande';
import { HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-demande-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
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

  listeOffres$!: Offre[];
  montantTotal$!: number;

  constructor(
    private fb: FormBuilder,
    private distribService: CanalPlusServiceService
  ) {}

  ngOnInit() {
    console.log(this.formatDate(this.dateJ));

    this.distribService.listesOffre().subscribe((data) => {
      this.listeOffres$ = data;
      console.log(this.listeOffres$);
    });

    this.reaboForm = this.fb.group({
      bouquet: [''],
      numero_decodeur: [''],
      demande: this.fb.group({
        typeDemande: ['reabonnement'],
        date_demande: [this.formatDate(this.dateJ)],
        commission: [''],
        duree_abonnement: [''],
        status: [Status.EN_ATTENTE],
      }),
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
    let dureeReabo: number = this.reaboForm.value.demande.duree_abonnement;
    let bouquetChoisi = this.listeOffres$.find(
      (element) => element.bouquet == this.reaboForm.value.bouquet
    );

    if (bouquetChoisi) {
      this.montantTotal$ = dureeReabo * bouquetChoisi?.montant;
      console.log(this.montantTotal$);
      let commission = (this.montantTotal$ * 4) / 100;
      console.log(commission);
      this.reaboForm.value.demande.commission = commission;
    }

    console.log(this.reaboForm.value);

    this.distribService.createDemande(this.reaboForm.value).subscribe((response) => {
      console.log('reussi'+ response.status);
    });

    // this.distribService.createDReabo(this.reaboForm.value).subscribe(() => {
    //   console.log('reussi');
    //   window.location.reload();
    // });
  }
}
