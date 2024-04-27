import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from '../_models/offre';

@Injectable({
  providedIn: 'root',
})

export class CanalPlusServiceService {
  private baseUrl = 'http://localhost:8080';

  //distrib url
  private saveDistrib:string=this.baseUrl +'/distrib/save_distributeur';
  private allDistrib:string=this.baseUrl + '/distrib/all_distrib';

  //offre url
  private saveOffre: string = this.baseUrl + '/offre/save_offre';
  private listOffre: string = this.baseUrl + '/offre/list_offre';
  private deleteOffre: string = this.baseUrl + '/offre/delete_offre/';

  //demande url
  private saveDemande: string = this.baseUrl + '/demande/save_demande';

  //demande liste url
  private recrutementWithoutPara =
    this.baseUrl + '/demande/recrutement_without_parabole';
  private recrutementWithPara =
    this.baseUrl + '/demande/recrutement_with_parabole';
  private recrutementListe = this.baseUrl + '/demande/recrutement';
  private reabonnementListe = this.baseUrl + '/demande/reabonnement';

  //
  private recruEnAttente = this.baseUrl + '/demande/recru_en_attente';
  private reaboEnAttente = this.baseUrl + '/demande/reabo_en_attente';

  //Distributeur

  createDistrib(distributeur:any):Observable<any>{
    return this.http.post<any>(`${this.saveDistrib}`,distributeur);
  }

  listeDistrib():Observable<any>{
    return this.http.get<any>(`${this.allDistrib}`);
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

  createRecrutementWithoutPara(demande: any): Observable<any> {
    return this.http.post<any>(`${this.recrutementWithoutPara}`, demande);
  }

  createRecrutementWithPara(demande: any): Observable<any> {
    return this.http.post<any>(`${this.recrutementWithPara}`, demande);
  }

  listRecrutement():Observable<any>{
    return this.http.get<any>(`${this.recrutementListe}`);
  }

  listeReabonnement():Observable<any>{
    return this.http.get<any>(`${this.reabonnementListe}`);
  }

  listeRecrutementEnAttente():Observable<any>{
    return this.http.get<any>(`${this.recruEnAttente}`);
  }

  listeReaboEnttente():Observable<any>{
    return this.http.get<any>(`${this.reaboEnAttente}`);
  }

  //--------------------------------------------------------------------------------------------------
  uri: string = 'http://localhost:3000/';

  demandeApi: string = this.uri + 'demande';

  demandeInstall: string = this.uri + 'demandeInstall';

  distributeurs: string = this.uri + 'distributeurs';
  constructor(private http: HttpClient) {}

  createDReabo(demande: any): Observable<any> {
    return this.http.post<any>(`${this.demandeApi}`, demande);
  }

  listeDReabo(): Observable<any> {
    return this.http.get<any>(`${this.demandeApi}`);
  }

  createDInstall(demande: any): Observable<any> {
    return this.http.post<any>(`${this.demandeInstall}`, demande);
  }

  listeDInstall(): Observable<any> {
    return this.http.get<any>(`${this.demandeInstall}`);
  }

  createDistributeur(distributeur: any): Observable<any> {
    return this.http.post(`${this.distributeurs}`, distributeur);
  }

  listeDistributeur(): Observable<any> {
    return this.http.get<any>(`${this.distributeurs}`);
  }

  ////////-----------------------------------------------------------------------
}
