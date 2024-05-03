import { Component, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailReaboComponent } from '../../dialog-detail-reabo/dialog-detail-reabo.component';

@Component({
  selector: 'app-reabonnement-attente',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './reabonnement-attente.component.html',
  styleUrl: './reabonnement-attente.component.css',
})
export class ReabonnementAttenteComponent {

  displayedColumns: string[] = [
    'bouquet',
    'duree',
    'decodeur',
    'status',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource:any;

  nbr!:number;
  
  constructor(private canalService: CanalPlusServiceService,public dialog: MatDialog) {}

  ngOnInit() {
    this.canalService.listeReaboEnttente().subscribe((data) => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.nbr=data.length;
      console.log(data);
    });
  }

  openDialogValidation(demande:any){
    const dialogRef = this.dialog.open(DialogDetailReaboComponent, {
      data: demande,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');

      console.log(result);
    });
  }
}