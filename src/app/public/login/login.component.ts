import { Component } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../_service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      nom: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  handleSubmit() {
    console.log(this.loginForm.value);
    this.authService
      .login(this.loginForm.value.nom, this.loginForm.value.password)
      .subscribe((data:any) => {
        if (this.loginForm.value.nom == 'gerant') {
          this.router.navigate(['/gerant/dashbord']);
        } else if (this.loginForm.value.nom == 'distributeur') {
          this.router.navigate(['distributeur/dashbord']);
        }
      });
  }
}
