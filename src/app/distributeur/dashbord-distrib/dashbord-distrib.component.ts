import { Component } from '@angular/core';

import { ReabonnementAttenteComponent } from '../../gerant/dashbord/reabonnement-attente/reabonnement-attente.component';
import { InstallationAttenteComponent } from '../../gerant/dashbord/installation-attente/installation-attente.component';
import { ReaboDistribAttenteComponent } from './reabo-distrib-attente/reabo-distrib-attente.component';
import { RecruDistribAttenteComponent } from './recru-distrib-attente/recru-distrib-attente.component';
import { CanalPlusServiceService } from '../../_service/canal-plus-service.service';

@Component({
  selector: 'app-dashbord-distrib',
  standalone: true,
  imports: [ReaboDistribAttenteComponent,RecruDistribAttenteComponent],
  templateUrl: './dashbord-distrib.component.html',
  styleUrl: './dashbord-distrib.component.css'
})
export class DashbordDistribComponent {

  commission!:number;
  demandes!:any;

  constructor(private canalService:CanalPlusServiceService){}

  ngOnInit(){
    this.canalService.commission().subscribe((data)=>{
        this.commission = data.commission;
        this.demandes = data.demandes;
        console.log(data);
    })
  }
}
