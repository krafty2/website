import { Component, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

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
  displayedColumns: string[] = ['decodeur', 'bouquet', 'duree', 'statut'];

  dataSource = new MatTableDataSource<Reabonnement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Reabonnement {
  numeroDecodeur: string;
  bouquet: string;
  duree: string;
  statut: string;
}

const ELEMENT_DATA: Reabonnement[] = [
  {
    numeroDecodeur: 'D004FJSJN',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    numeroDecodeur: 'D004FJSJNAK',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    numeroDecodeur: 'D004FJSJNAK',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    numeroDecodeur: 'D004FJSJNAK',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    numeroDecodeur: 'D004FJSJNAK',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    numeroDecodeur: 'D004FJSJNAK',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    numeroDecodeur: 'D004FJSJNAK',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    numeroDecodeur: 'D004FJSJNAK',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    numeroDecodeur: 'D004FJSJNAK',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    numeroDecodeur: 'D004FJSJNAK',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    numeroDecodeur: 'D004FJSJNAK',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    numeroDecodeur: 'D004FJSJNAK',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
  {
    numeroDecodeur: 'D004FJSJNAK',
    bouquet: 'Acces +',
    duree: '12 mois',
    statut: 'En attente',
  },
];
