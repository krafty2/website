import { Component, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailReaboComponent } from '../../dialog-detail-reabo/dialog-detail-reabo.component';

@Component({
  selector: 'app-installation-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    DatePipe
  ],
  templateUrl: './installation-list.component.html',
  styleUrl: './installation-list.component.css',
})
export class InstallationListComponent {
  displayedColumns: string[] = [
    'bouquet',
    'decodeur',
    'duree',
    'dateDemande',
    'date_debutAbonnement',
    'date_finAbonnement',
    'commission',
    'status',
  ];

  dataSource!: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private canalService: CanalPlusServiceService,public dialog:MatDialog) {}

  ngOnInit() {
    this.canalService.listRecrutement().subscribe((data) => {
      // console.log(data);
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  openDialogValidation(demande:any){
    let vue = true;
    const dialogRef = this.dialog.open(DialogDetailReaboComponent, {
      data: [demande,vue],
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The dialog was closed');

      // console.log(result);
    });
  }
}
