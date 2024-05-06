import { Component, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateDistribComponent } from '../dialog-create-distrib/dialog-create-distrib.component';
import { MatMenuModule } from '@angular/material/menu';
import { DialgoReadDistribComponent } from '../dialgo-read-distrib/dialgo-read-distrib.component';

@Component({
  selector: 'app-distributeur-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './distributeur-list.component.html',
  styleUrl: './distributeur-list.component.css',
})
export class DistributeurListComponent {
  displayedColumns: string[] = ['nom', 'prenom', 'telephone', 'localite','username'];
  dataSource: any;

  affiche: boolean = false;

  nbr: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private canalService: CanalPlusServiceService,
    public dialog: MatDialog
  ) {}

  ngAfterViewInit() {
    this.canalService.listeDistrib().subscribe((data) => {
      console.log(data);
      this.nbr = data.length;
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  openDialogCreateDistrib() {
    const dialogRef = this.dialog.open(DialogCreateDistribComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');

      console.log(result);
    });
  }

  openDialogReadDistrib(demande:any){
    let vue = false;
    const dialogRef = this.dialog.open(DialgoReadDistribComponent, {
      data: demande,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');

      console.log(result);
    });
  }
}
