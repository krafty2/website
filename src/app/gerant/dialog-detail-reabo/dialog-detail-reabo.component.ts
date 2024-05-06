import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Status } from '../../_models/demande';
import { CanalPlusServiceService } from '../../_service/canal-plus-service.service';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
@Component({
  selector: 'app-dialog-detail-reabo',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    DatePipe,
    CommonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-detail-reabo.component.html',
  styleUrl: './dialog-detail-reabo.component.css',
})
export class DialogDetailReaboComponent {
  date = new FormControl<Date | null>(null, []);

  dateDebut!: Date;

  demande!:any;

  modeVue!:boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogDetailReaboComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private canalService: CanalPlusServiceService
  ) {}

  ngOnInit() {
    console.log(this.data[0])
    // this.data.date_debutAbonnement = '2020-22-2';
    this.date.setValue(new Date());
    this.demande = this.data[0];
    this.modeVue = this.data[1];
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
    console.log(this.date.value?.getDate());

    let mois = this.date.value?.getMonth();
    let day = this.date.value?.getDate();
    let year = this.date.value?.getFullYear();
    if (year && mois && day) {
      let dateFin = new Date(year, mois + this.demande.duree_abonnement, day);
      console.log(dateFin);
      this.demande.date_debutAbonnement = this.formatDate(this.date.value);
      this.demande.date_finAbonnement = this.formatDate(dateFin);
      this.demande.status = Status.VALIDE;
      console.log(this.demande);
      let demande = this.demande;
      this.canalService.majDemande(demande).subscribe((response)=>{
        console.log("reuissi");
        console.log(response);
        if(response){
          window.location.reload();
        }
      })
    }
  }
}
