import { Component, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';

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
  
  constructor(private canalService: CanalPlusServiceService) {}

  ngOnInit() {
    this.canalService.listeRecrutementEnAttente().subscribe((data) => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });
  }
}