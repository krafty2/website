import { Component, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-installation-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatIconModule,MatMenuModule,MatButtonModule],
  templateUrl: './installation-list.component.html',
  styleUrl: './installation-list.component.css'
})
export class InstallationListComponent {

  displayedColumns: string[] = [
    'codeReabonnement',
    'codeDistributeur',
    'bouquet',
    'duree',
    'statut',
  ];

  dataSource = new MatTableDataSource<Installation>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Installation {
  codeInstallation: string;
  codeDistributeur: string;
  bouquet: string;
  duree: string;
  statut: string;
}

const ELEMENT_DATA: Installation[] = [
  {
    codeInstallation: 'R001',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeInstallation: 'R002',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeInstallation: 'R003',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeInstallation: 'R004',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeInstallation: 'R005',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeInstallation: 'R006',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeInstallation: 'R007',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeInstallation: 'R008',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeInstallation: 'R009',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeInstallation: 'R010',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeInstallation: 'R011',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeInstallation: 'R012',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    codeInstallation: 'R013',
    codeDistributeur: 'D004',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
];
