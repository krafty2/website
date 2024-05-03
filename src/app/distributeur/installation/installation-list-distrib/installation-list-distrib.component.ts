import { Component, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';

@Component({
  selector: 'app-installation-list-distrib',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './installation-list-distrib.component.html',
  styleUrl: './installation-list-distrib.component.css',
})
export class InstallationListDistribComponent {
  displayedColumns: string[] = [
    'numero_decodeur',
    'bouquet',
    'duree',
    'pourcentage_percu',
  ];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private distribService: CanalPlusServiceService) {}

  ngAfterViewInit() {
    // this.distribService.listeDInstall().subscribe((data) => {
    //   console.log((data))
    //   this.dataSource = new MatTableDataSource<any>(data);
    //   this.dataSource.paginator = this.paginator;
    // });
  }
}

export interface Reabonnment {
  numeroDecodeur: string;
  duree: string;
  pourcentage: string;
  bouquet: string;
}

const ELEMENT_DATA: Reabonnment[] = [
  {
    numeroDecodeur: 'DKJAKLC21',
    bouquet: 'Acces +',
    duree: '3 mois',
    pourcentage: '660 CFA',
  },
  {
    numeroDecodeur: 'DKJAKLC21',
    bouquet: 'Acces +',
    duree: '3 mois',
    pourcentage: '660 CFA',
  },
  {
    numeroDecodeur: 'DKJAKLC21',
    bouquet: 'Acces +',
    duree: '3 mois',
    pourcentage: '660 CFA',
  },
  {
    numeroDecodeur: 'DKJAKLC21',
    bouquet: 'Acces +',
    duree: '3 mois',
    pourcentage: '660 CFA',
  },
  {
    numeroDecodeur: 'DKJAKLC21',
    bouquet: 'Acces +',
    duree: '3 mois',
    pourcentage: '660 CFA',
  },
  {
    numeroDecodeur: 'DKJAKLC21',
    bouquet: 'Acces +',
    duree: '3 mois',
    pourcentage: '660 CFA',
  },
  {
    numeroDecodeur: 'DKJAKLC21',
    bouquet: 'Acces +',
    duree: '3 mois',
    pourcentage: '660 CFA',
  },
  {
    numeroDecodeur: 'DKJAKLC21',
    bouquet: 'Acces +',
    duree: '3 mois',
    pourcentage: '660 CFA',
  },
  {
    numeroDecodeur: 'DKJAKLC21',
    bouquet: 'Acces +',
    duree: '3 mois',
    pourcentage: '660 CFA',
  },
  {
    numeroDecodeur: 'DKJAKLC21',
    bouquet: 'Acces +',
    duree: '3 mois',
    pourcentage: '660 CFA',
  },
  {
    numeroDecodeur: 'DKJAKLC21',
    bouquet: 'Acces +',
    duree: '3 mois',
    pourcentage: '660 CFA',
  },
];
