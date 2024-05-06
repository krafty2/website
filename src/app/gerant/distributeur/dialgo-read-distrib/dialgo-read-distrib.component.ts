import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { DistributeurFormComponent } from '../distributeur-form/distributeur-form.component';

@Component({
  selector: 'app-dialgo-read-distrib',
  standalone: true,
  imports: [MatDialogModule,DistributeurFormComponent],
  templateUrl: './dialgo-read-distrib.component.html',
  styleUrl: './dialgo-read-distrib.component.css'
})
export class DialgoReadDistribComponent {

  distributeurs!:any;

  constructor(
    public dialogRef: MatDialogRef<DialgoReadDistribComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private canalService: CanalPlusServiceService
  ) {}

  ngOnInit():void{
    this.distributeurs = this.data;
  }
}
