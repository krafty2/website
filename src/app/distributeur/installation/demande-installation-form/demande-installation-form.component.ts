import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';

@Component({
  selector: 'app-demande-installation-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
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

  constructor(private fb: FormBuilder,private distribService:CanalPlusServiceService) {}

  ngOnInit() {
    this.installationForm = this.fb.group({
      typeDemande: ['installation'],
      duree: [''],
      bouquet: [''],
      numero_decodeur: [''],
      date_demande: [this.formatDate(this.dateJ)],
      pourcentage_percu: ['1500'],
      nom: [''],
      prenom: [''],
      telephone: [''],
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

  handleSubmit(){
    console.log(this.installationForm.value);

    this.distribService.createDInstall(this.installationForm.value).subscribe(()=>{
      console.log('reuissi');
    })
  }
}
