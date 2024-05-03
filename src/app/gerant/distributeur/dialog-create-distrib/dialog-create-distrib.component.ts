import { Component } from '@angular/core';
import { DistributeurFormComponent } from '../distributeur-form/distributeur-form.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-create-distrib',
  standalone: true,
  imports: [DistributeurFormComponent, MatDialogModule,MatButtonModule],
  templateUrl: './dialog-create-distrib.component.html',
  styleUrl: './dialog-create-distrib.component.css'
})
export class DialogCreateDistribComponent {

}
