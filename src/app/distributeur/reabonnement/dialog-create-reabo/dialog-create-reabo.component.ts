import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';

@Component({
  selector: 'app-dialog-create-reabo',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './dialog-create-reabo.component.html',
  styleUrl: './dialog-create-reabo.component.css',
})
export class DialogCreateReaboComponent {
  montant$!: number;

  reabo$!: any;

  constructor(
    public dialogRef: MatDialogRef<DialogCreateReaboComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private distribService: CanalPlusServiceService
  ) {}

  ngOnInit() {
    console.log(this.data);

    this.reabo$ = this.data[0];
    this.montant$ = this.data[1];

    console.log(this.reabo$);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleSubmit() {
    
    if (this.reabo$.demande.typeDemande == "reabonnement") {
      console.log(this.reabo$);
      this.distribService.createDemande(this.reabo$).subscribe((response) => {
        console.log('reussi' + response.status);
        window.location.reload();
      });
    } else if (this.reabo$.demande.typeDemande == "recrutement") {
      this.distribService
        .createRecrutemen(this.reabo$)
        .subscribe((data) => {
          if (data) {
            console.log('reussi');
            window.location.reload();
          }
        });
    }
  }
}
