import { Component, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';

@Component({
  selector: 'app-installation-attente',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './installation-attente.component.html',
  styleUrl: './installation-attente.component.css',
})
export class InstallationAttenteComponent {
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
    this.canalService.listeReaboEnttente().subscribe((data) => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });
  }
}