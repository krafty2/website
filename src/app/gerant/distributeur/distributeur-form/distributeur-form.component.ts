import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../_service/auth.service';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { max } from 'rxjs';

@Component({
  selector: 'app-distributeur-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './distributeur-form.component.html',
  styleUrl: './distributeur-form.component.css',
})
export class DistributeurFormComponent {
  distributeurForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private canalService: CanalPlusServiceService) {}

  ngOnInit() {
    this.distributeurForm = this.fb.group({
      nom: ['',[Validators.required]],
      prenom: ['',[Validators.required]],
      telephone: [''],
      localite: [''],
      longitude: ['',[Validators.max(15),Validators.min(-7)]],
      latitude: ['',[Validators.max(15),Validators.min(-7)]],
    });
  }

  handleSubmit() {
    console.log(this.distributeurForm.value);

    this.canalService
      .createDistributeur(this.distributeurForm.value)
      .subscribe(() => {
        console.log('reussi');
      });
  }
}
