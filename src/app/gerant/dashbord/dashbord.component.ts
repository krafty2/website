import { afterRender, Component, ViewChild } from '@angular/core';
import * as L from 'leaflet';

import { DistributeurCarteComponent } from '../distributeur/distributeur-carte/distributeur-carte.component';
import { ReabonnementAttenteComponent } from './reabonnement-attente/reabonnement-attente.component';
import { InstallationAttenteComponent } from './installation-attente/installation-attente.component';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CanalPlusServiceService } from '../../_service/canal-plus-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateOffreComponent } from '../Offre/dialog-create-offre/dialog-create-offre.component';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';



@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [
    DistributeurCarteComponent,
    ReabonnementAttenteComponent,
    InstallationAttenteComponent,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css',
})
export class DashbordComponent {
  map: any;
  mark:any;

  listOffre:any;

  nbrDistrib!:number;
  nbrClients!:number;

  ca!:any;

  constructor(private canalService: CanalPlusServiceService,public dialog: MatDialog) {

  }

  ngOnInit(){
    this.canalService.listesOffre().subscribe((data)=>{
      this.listOffre = data;
    });

    this.canalService.listeDistrib().subscribe((data)=>{
      this.nbrDistrib = data.length;
    });

    this.canalService.clients().subscribe((data)=>{
      this.nbrClients = data.length;
    });

    this.canalService.chiffreAffaireGerant().subscribe((data)=>{
      this.ca = data;
    })
  }

  openDialogOffre(){
    const dialogRef = this.dialog.open(DialogCreateOffreComponent, {});
    dialogRef.afterClosed().subscribe((result) => {

    });
  }

  modifDialogOffre(offre:any){
    const dialogRef = this.dialog.open(DialogCreateOffreComponent, { data: offre});
    dialogRef.afterClosed().subscribe((result) => {

    });
  }

  // ngOnInit(){
  //   if (this.map != undefined || this.map != null) {
  //     this.map.remove();
  //   }
  // }

  // //problem relier au composant parent
  // ngAfterViewInit() {
  //   if (this.map != undefined || this.map != null) {
  //     this.map.remove();
  //   }

  //   this.initMap();
  // }

  // initMap(): void {
  //   if (this.map != undefined || this.map != null) {
  //     this.map.remove();
  //   }
  //   this.canalService.listeDistributeur().subscribe((data) => {
  //     console.log(data);

  //     let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       maxZoom: 19,
  //     });

  //     let googleHybrid = L.tileLayer(
  //       'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
  //       {
  //         maxZoom: 19,
  //         subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  //       }
  //     );

  //     let street = L.tileLayer(
  //       'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
  //       {
  //         maxZoom: 19,
  //         subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  //       }
  //     );

  //     //creation de la carte
  //     this.map = L.map('map', { layers: [street, osm], zoom: 7 }).setView([
  //       12.396745, -1.556532,
  //     ]);

  //     let baseMaps = {
  //       Satelite: googleHybrid,
  //       OpenStreetMap: osm,
  //       Street: street,
  //     };

  //     L.control.layers(baseMaps).addTo(this.map);

  //     let iconMesure = L.icon({
  //       iconUrl: 'assets/img/position-svgrepo-com.png',
  //       iconSize: [45, 45],
  //       popupAnchor: [0, -20],
  //     });

  //     data.forEach((element: any) => {
  //       console.log(element.latitude);

  //       this.mark = L.marker([element.longitude, element.latitude], {
  //         icon: iconMesure,
  //       })
  //         .addTo(this.map)
  //         .bindPopup(`${element.nom} ${element.prenom}`);
  //     });
  //   });
  // }
}
