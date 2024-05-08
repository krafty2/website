import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public host: string = 'http://localhost:8081/public/';

  public auth: string = this.host+ 'token';

  isLoggedIn: boolean = false;

  redirecturl!: string;

  public userProfile : any | null =null;

  constructor(private http:HttpClient) {}

  login(username: string, password: string): Observable<any> {

    let options= {
      headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    }
    let params=new HttpParams()
      .set('username',username)
      .set('password',password)
      .set('withRefreshToken',true)
      .set("grandType","password")
      .set("refreshToken","");

      return this.http.post(`${this.auth}`, params,options);
  }

  authenticateUser(idToken: any) {
    let jwtHelperService=new JwtHelperService();

    let accessToken=idToken['accessToken'];
    let refreshToken = idToken['refreshToken'];

    let decodedJWTAccessToken = jwtHelperService.decodeToken(accessToken);

    this.saveToken(accessToken);

    this.userProfile= {
     
      username:decodedJWTAccessToken.sub,
      email:decodedJWTAccessToken.email,
      scope : decodedJWTAccessToken.scope,
      accessToken : accessToken,
      refreshToken:refreshToken,
    }

    console.log(this.userProfile.scope);

    this.isLoggedIn = true;
    localStorage.setItem('userProfile',JSON.stringify(this.userProfile));
    window.sessionStorage.setItem('user',JSON.stringify(this.userProfile))
    
  }

  public refreshToken(refreshToken:string){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    let params = new HttpParams()
      .set("grantType", "refreshToken")
      .set("refreshToken",this.userProfile!.refreshToken)
      .set('withRefreshToken',true)
    return this.http.post(`${this.host}`, params,options)
  }

  saveToken(token:string):void{
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLogged():boolean{
    const token = localStorage.getItem('token');
    return !! token;
  }

  logout() {
    this.clear();
    window.location.href="/"
  }

  clear(){
    localStorage.removeItem('token');
    localStorage.removeItem('userProfile');
  }

  isAuthenticated() {
    let test = localStorage.getItem('userProfile');
    let userP;
    if(test!==null)
    userP = JSON.parse(test);
    console.log(userP.username)
    return this.userProfile!=null;
    //return localStorage.getItem('userProfile')!=null
  }

  loadProfile(){
    let profile =localStorage.getItem("userProfile");
    if(profile==undefined) return;
    let item = JSON.parse(profile);
    this.authenticateUser({"access-token":item.accessToken,"refresh-token":item.refreshToken});
  }

  setCurrentUser() {
    localStorage.setItem('userProfile',JSON.stringify(this.userProfile));
  }

  hasRole(role : string) :boolean{
    //
    let storage = localStorage.getItem('userProfile');
    let userP;
    if(storage){
      userP = JSON.parse(storage);
    }
    console.log(userP.scope);
    return userP.scope.includes(role);
  }
}
