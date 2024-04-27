import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { Status } from '../../../_models/demande';
import { Offre } from '../../../_models/offre';
import { CommonModule } from '@angular/common';
import { DialogCreateReaboComponent } from '../../reabonnement/dialog-create-reabo/dialog-create-reabo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-demande-installation-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './demande-installation-form.component.html',
  styleUrl: './demande-installation-form.component.css',
})
export class DemandeInstallationFormComponent {
  installationForm!: FormGroup;

  dateJ: Date = new Date();

  listeOffres$!: Offre[];
  montantTotal$!: number;

  parabole:boolean=false;
  
  constructor(
    private fb: FormBuilder,
    private distribService: CanalPlusServiceService,
    public dialog: MatDialog
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
        commission: ['1500'],
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
    }

    console.log(this.installationForm.value);

    const dialogRef = this.dialog.open(DialogCreateReaboComponent, {
      data: [this.installationForm.value,this.montantTotal$],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');

      console.log(result);
    });

    // this.distribService.createRecrutementWithoutPara(this.installationForm.value).subscribe((data)=>{
    //   if(data){
    //      console.log('reussi');
    //   }
    // });
  }
}
