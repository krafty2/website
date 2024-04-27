import { afterRender, Component } from '@angular/core';
import * as L from 'leaflet';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
@Component({
  selector: 'app-distributeur-carte',
  standalone: true,
  imports: [],
  templateUrl: './distributeur-carte.component.html',
  styleUrl: './distributeur-carte.component.css',
})
export class DistributeurCarteComponent {
  map: any;
  mark: any;

  listeDistrib$: any = [];

  constructor(private canalService: CanalPlusServiceService) {
   
  }

  ngAfterViewInit() {
    if (this.map != undefined || this.map != null) {
      this.map.remove();
    }

    this.initMap();
  }

  initMap(): void {
    if (this.map != undefined || this.map != null) {
      this.map.remove();
    }
    this.canalService.listeDistrib().subscribe((data) => {
      console.log(data);

      let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      });

      let googleHybrid = L.tileLayer(
        'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
        {
          maxZoom: 19,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        }
      );

      let street = L.tileLayer(
        'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        {
          maxZoom: 19,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        }
      );

      //creation de la carte
      this.map = L.map('map', { layers: [street, osm], zoom: 7 }).setView([
        12.396745, -1.556532,
      ]);

      let baseMaps = {
        Satelite: googleHybrid,
        OpenStreetMap: osm,
        Street: street,
      };

      L.control.layers(baseMaps).addTo(this.map);

      let iconMesure = L.icon({
        iconUrl: 'assets/img/position-svgrepo-com.png',
        iconSize: [45, 45],
        popupAnchor: [0, -20],
      });

      data.forEach((element: any) => {
        console.log(element.latitude);

        this.mark = L.marker([element.longitude, element.latitude], {
          icon: iconMesure,
        })
          .addTo(this.map)
          .bindPopup(`${element.nom} ${element.prenom}`);
      });
    });
  }
}
