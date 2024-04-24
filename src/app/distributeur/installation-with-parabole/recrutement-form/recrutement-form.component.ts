import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { Offre } from '../../../_models/offre';
import { Status } from '../../../_models/demande';


import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recrutement-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './recrutement-form.component.html',
  styleUrl: './recrutement-form.component.css'
})
export class RecrutementFormComponent {

  installationForm!: FormGroup;

  dateJ: Date = new Date();

  listeOffres$!: Offre[];
  montantTotal$!: number;

  parabole:boolean = true;
  
  constructor(
    private fb: FormBuilder,
    private distribService: CanalPlusServiceService
  ) {}

  ngOnInit() {

    this.distribService.listesOffre().subscribe((data) => {
      this.listeOffres$ = data;
      console.log(this.listeOffres$);
    });

    this.installationForm = this.fb.group({
      bouquet: [''],
      client: this.fb.group({
        decodeur: [''],
        date_demande: [this.formatDate(this.dateJ)],
        nom: [''],
        prenom: [''],
        telephone: [''],
      }),
      demande: this.fb.group({
        typeDemande: ['recrutement'],
        date_demande: [this.formatDate(this.dateJ)],
        commission: [''],
        duree_abonnement: [''],
        status: [Status.EN_ATTENTE],
        parabole:[this.parabole]
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

    let dureeReabo: number = this.installationForm.value.demande.duree_abonnement;
    let bouquetChoisi = this.listeOffres$.find(
      (element) => element.bouquet == this.installationForm.value.bouquet
    );

    if (bouquetChoisi) {
      this.montantTotal$ = dureeReabo * bouquetChoisi?.montant;
      console.log(this.montantTotal$);
      let commission = (this.montantTotal$ * 4) / 100;
      console.log(commission);
      this.installationForm.value.demande.commission = commission;
    }

    console.log(this.installationForm.value);

    this.distribService.createRecrutementWithPara(this.installationForm.value).subscribe((data)=>{
      if(data){
         console.log('reussi');
      }
    })
  }
}
