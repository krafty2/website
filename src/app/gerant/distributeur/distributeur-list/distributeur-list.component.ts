import { Component, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';

@Component({
  selector: 'app-distributeur-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './distributeur-list.component.html',
  styleUrl: './distributeur-list.component.css',
})
export class DistributeurListComponent {
  displayedColumns: string[] = [
    'nom',
    'prenom',
    'telephone',
    'localite',
  ];
  dataSource:any;

  affiche:boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private canalService: CanalPlusServiceService) {}

  ngAfterViewInit() {

    this.canalService.listeDistrib().subscribe((data)=>{
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
    })
    
  }
}
