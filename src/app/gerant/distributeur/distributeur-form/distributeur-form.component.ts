import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../_service/auth.service';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { max } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-distributeur-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './distributeur-form.component.html',
  styleUrl: './distributeur-form.component.css',
})
export class DistributeurFormComponent {
  distributeurForm!: FormGroup;

  hide:boolean=true;

  constructor(
    private fb: FormBuilder,
    private canalService: CanalPlusServiceService) {}

  ngOnInit() {
    this.distributeurForm = this.fb.group({
      nom: ['',[Validators.required]],
      prenom: ['',[Validators.required]],
      username:['',[Validators.required]],
      telephone: [''],
      localite: [''],
      longitude: ['',[Validators.max(15),Validators.min(-7)]],
      latitude: ['',[Validators.max(15),Validators.min(-7)]],
      password:['']
    });
  }

  handleSubmit() {
    console.log(this.distributeurForm.value);

    this.canalService.createDistrib(this.distributeurForm.value).subscribe((data)=>{
      console.log('reussi');
      window.location.reload();
    })
  }
}
