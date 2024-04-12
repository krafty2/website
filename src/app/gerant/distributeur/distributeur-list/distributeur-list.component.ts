import { Component, ViewChild } from '@angular/core';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-distributeur-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './distributeur-list.component.html',
  styleUrl: './distributeur-list.component.css',
})
export class DistributeurListComponent {
  displayedColumns: string[] = [
    'codeDistributeur',
    'nom',
    'prenom',
    'telephone',
    'localite',
  ];
  dataSource = new MatTableDataSource<Distributeur>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Distributeur {
  nom: string;
  codeDistributeur: number;
  prenom: string;
  telephone: string;
  localite: string;
}

const ELEMENT_DATA: Distributeur[] = [
  {
    codeDistributeur: 1,
    nom: 'Hydrogen',
    prenom: 'Sofia',
    telephone: '60606060',
    localite: 'Ouahigouya',
  },
  {
    codeDistributeur: 2,
    nom: 'Helium',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 3,
    nom: 'Lithium',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 4,
    nom: 'Beryllium',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 5,
    nom: 'Boron',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 6,
    nom: 'Carbon',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 7,
    nom: 'Nitrogen',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 8,
    nom: 'Oxygen',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 9,
    nom: 'Fluorine',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 10,
    nom: 'Neon',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 11,
    nom: 'Sodium',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 12,
    nom: 'Magnesium',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 13,
    nom: 'Aluminum',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 14,
    nom: 'Silicon',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 15,
    nom: 'Phosphorus',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 16,
    nom: 'Sulfur',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 17,
    nom: 'Chlorine',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 18,
    nom: 'Argon',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 19,
    nom: 'Potassium',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
  {
    codeDistributeur: 20,
    nom: 'Calcium',
    prenom: 'Pierre',
    telephone: '60606060',
    localite: 'Po',
  },
];
