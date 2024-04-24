import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { OffreFormComponent } from '../offre-form/offre-form.component';
import { ListOffreComponent } from '../list-offre/list-offre.component';

@Component({
  selector: 'app-dialog-create-offre',
  standalone: true,
  imports: [OffreFormComponent,ListOffreComponent],
  templateUrl: './dialog-create-offre.component.html',
  styleUrl: './dialog-create-offre.component.css',
})
export class DialogCreateOffreComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogCreateOffreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
