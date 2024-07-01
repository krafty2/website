import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from '../_models/offre';

@Injectable({
  providedIn: 'root',
})
export class CanalPlusServiceService {
  private baseUrl = 'https://mne-backend.hisiastudio.com';

  //distrib url
  private saveDistrib: string = this.baseUrl + '/distrib/save_distributeur';
  private updateDistrib: string = this.baseUrl + '/distrib/update_distributeur';
  private allDistrib: string = this.baseUrl + '/distrib/all_distrib';
  private listDistribDemande: string =
    this.baseUrl + '/distrib/distrib_demande';

  private commis = this.baseUrl + '/distrib/commission';

  //offre url
  private saveOffre: string = this.baseUrl + '/offre/save_offre';
  private listOffre: string = this.baseUrl + '/offre/list_offre';
  private deleteOffre: string = this.baseUrl + '/offre/delete_offre/';
  private recruDistribEnAttente =
    this.baseUrl + '/demande/demande_distrib_en_attente_recru';
  private reaboDistribEnAttente =
    this.baseUrl + '/demande/demande_distrib_en_attente';

  //demande url
  private saveDemande: string = this.baseUrl + '/demande/save_demande';

  //demande liste url
  private recrutement = this.baseUrl + '/demande/recrutement';
  //gerant
  private recrutementListe = this.baseUrl + '/demande/recrutement';
  private reabonnementListe = this.baseUrl + '/demande/reabonnement';
  private upDemande: string = this.baseUrl + '/demande/update_demande';
  private ca = this.baseUrl + '/gerant/ca';

  //
  private recruEnAttente = this.baseUrl + '/demande/recru_en_attente';
  private reaboEnAttente = this.baseUrl + '/demande/reabo_en_attente';

  //client
  private allClients = this.baseUrl + '/client/all_clients';

  constructor(private http: HttpClient) {}

  //client

  clients(): Observable<any> {
    return this.http.get<any>(`${this.allClients}`);
  }

  //Distributeur

  createDistrib(distributeur: any): Observable<any> {
    return this.http.post<any>(`${this.saveDistrib}`, distributeur);
  }

  updateDistribS(distributeur: any): Observable<any> {
    return this.http.put<any>(`${this.updateDistrib}`, distributeur);
  }

  listeDistrib(): Observable<any> {
    return this.http.get<any>(`${this.allDistrib}`);
  }

  commission():Observable<any>{
    return this.http.get<any>(`${this.commis}`);
  }

  //Offre

  createOffre(offre: Offre): Observable<Offre> {
    return this.http.post<Offre>(`${this.saveOffre}`, offre);
  }

  listesOffre(): Observable<Offre[]> {
    return this.http.get<Offre[]>(`${this.listOffre}`);
  }

  deleteOffres(id: number): Observable<Offre> {
    return this.http.delete<Offre>(`${this.deleteOffre}${id}`);
  }

  //Demande
  createDemande(demande: any): Observable<any> {
    return this.http.post<any>(`${this.saveDemande}`, demande);
  }

  majDemande(demande: any): Observable<any> {
    return this.http.put<any>(`${this.upDemande}`, demande);
  }

  //Distrib api
  createRecrutemen(demande: any): Observable<any> {
    return this.http.post<any>(`${this.recrutement}`, demande);
  }

  listDistribReabo(typeDemande: string): Observable<any> {
    return this.http.get<any>(`${this.listDistribDemande}/${typeDemande}`);
  }

  listDistribReaboAttente(): Observable<any> {
    return this.http.get<any>(`${this.reaboDistribEnAttente}`);
  }
  listDistribRecruAttente(): Observable<any> {
    return this.http.get<any>(`${this.recruDistribEnAttente}`);
  }

  //Gerant api
  listRecrutement(): Observable<any> {
    return this.http.get<any>(`${this.recrutementListe}`);
  }

  listeReabonnement(): Observable<any> {
    return this.http.get<any>(`${this.reabonnementListe}`);
  }

  listeRecrutementEnAttente(): Observable<any> {
    return this.http.get<any>(`${this.recruEnAttente}`);
  }

  listeReaboEnttente(): Observable<any> {
    return this.http.get<any>(`${this.reaboEnAttente}`);
  }

  chiffreAffaireGerant(): Observable<any> {
    return this.http.get<any>(`${this.ca}`);
  }
}
