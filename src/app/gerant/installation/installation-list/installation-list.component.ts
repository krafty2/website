import { Component, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';

@Component({
  selector: 'app-installation-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatIconModule,MatMenuModule,MatButtonModule],
  templateUrl: './installation-list.component.html',
  styleUrl: './installation-list.component.css'
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
    'status'
  ];

  dataSource!:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private canalService:CanalPlusServiceService){

  }

  ngOnInit(){
    this.canalService.listRecrutement().subscribe((data)=>{
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}