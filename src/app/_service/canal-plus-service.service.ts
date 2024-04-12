import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanalPlusServiceService {
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
}
