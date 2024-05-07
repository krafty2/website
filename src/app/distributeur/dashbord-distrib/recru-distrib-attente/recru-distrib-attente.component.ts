import { Component, ViewChild } from '@angular/core';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recru-distrib-attente',
  standalone: true,
  imports: [MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,],
  templateUrl: './recru-distrib-attente.component.html',
  styleUrl: './recru-distrib-attente.component.css'
})
export class RecruDistribAttenteComponent {

  displayedColumns: string[] = [
    'bouquet',
    'duree',
    'decodeur',
    'status',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource:any;

  nbr!:number;

  constructor(private canalService: CanalPlusServiceService) {}

  ngOnInit() {
    this.canalService.listDistribRecruAttente().subscribe((data) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.nbr= data.length;
    });
  }
}
