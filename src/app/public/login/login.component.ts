import { Component } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../_service/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;

  idToken : any;
  errorMessage :any;
  afficheErrorMsg!:any;

  role:any;

  admin:boolean=false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      nom: new FormControl('',[Validators.required]),
      password: ['', Validators.required],
    });
  }

  get nom (){
    return this.loginForm.get('nom');
  }

  get password(){
    return this.loginForm.get('password');
  }

  handleSubmit() {
    console.log(this.loginForm.value);
    this.authService
      .login(this.loginForm.value.nom, this.loginForm.value.password)
      .subscribe({
        next: response => {
          this.idToken = response;
          this.authService.authenticateUser(this.idToken);
          console.log(this.authService.userProfile);
          console.log(this.admin);
          this.verify$.subscribe();
          
        },
        error :err => {
          this.errorMessage = err.error.errorMessage;
         
          this.afficheErrorMsg = 'Entrez un identifiant ou un mot de passe valide';
          console.log(err);
        }
      });
  }

  verify$ = new Observable(()=>{
    let role = "Gerant";
    let storage = localStorage.getItem('userProfile');
    console.log(storage);
    let userP;
    storage?userP=JSON.parse(storage):userP=null
    console.log(userP.scope.includes(role));
    userP.scope.includes(role)?this.admin=true:this.admin=false;

    if(userP){
      this.admin?this.router.navigateByUrl("/gerant"):this.router.navigateByUrl("/distributeur");
    }

    
  })
}
