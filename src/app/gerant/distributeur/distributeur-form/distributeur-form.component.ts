import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../_service/auth.service';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { max } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AccountStatus, Status } from '../../../_models/demande';

@Component({
  selector: 'app-distributeur-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  templateUrl: './distributeur-form.component.html',
  styleUrl: './distributeur-form.component.css',
})
export class DistributeurFormComponent {
  distributeurForm!: FormGroup;

  hide: boolean = true;

  isChecked = new FormControl(true);

  @Input() distributeur!: any;

  constructor(
    private fb: FormBuilder,
    private canalService: CanalPlusServiceService
  ) {}

  ngOnInit() {
    console.log(this.distributeur);
    //this.distributeur.password = null;
    this.distributeurForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      username: ['', [Validators.required]],
      telephone: [''],
      localite: [''],
      longitude: ['', [Validators.max(15), Validators.min(-7)]],
      latitude: ['', [Validators.max(15), Validators.min(-7)]],
      password: [''],
    });
  }

  ngAfterViewInit() {
    this.distributeur.accountStatus == AccountStatus.ACTIVATED
      ? this.isChecked.setValue(true)
      : this.isChecked.setValue(false);
    if (this.distributeur) {
      this.distributeurForm = this.fb.group({
        nom: [this.distributeur.nom, [Validators.required]],
        prenom: [this.distributeur.prenom, [Validators.required]],
        username: [this.distributeur.username, [Validators.required]],
        telephone: [this.distributeur.telephone],
        localite: [this.distributeur.localite],
        codeDistributeur: [this.distributeur.codeDistributeur],
        longitude: [
          this.distributeur.longitude,
          [Validators.max(15), Validators.min(-7)],
        ],
        latitude: [
          this.distributeur.latitude,
          [Validators.max(15), Validators.min(-7)],
        ],
        password: [''],
      });
    }
  }

  handleSubmit() {
    console.log(this.distributeurForm.value);
    if (!this.distributeur) {
      this.canalService
        .createDistrib(this.distributeurForm.value)
        .subscribe((data) => {
          console.log('reussi');
          window.location.reload();
        });
    } else {
      this.distributeur.nom = this.distributeurForm.value.nom;
      this.distributeur.prenom = this.distributeurForm.value.prenom;
      this.distributeur.username = this.distributeurForm.value.username;
      this.distributeur.telephone = this.distributeurForm.value.telephone;
      this.distributeur.localite = this.distributeurForm.value.localite;
      this.distributeur.codeDistributeur =
        this.distributeurForm.value.codeDistributeur;
      this.distributeur.longitude = this.distributeurForm.value.longitude;
      this.distributeur.latitude = this.distributeurForm.value.latitude;

      if (!this.isChecked.value) {
        this.distributeur.accountStatus = AccountStatus.DESACTIVED;
      } else {
        this.distributeur.accountStatus = AccountStatus.ACTIVATED;
      }

      if (this.distributeurForm.value.password) {
        this.distributeur.password = this.distributeurForm.value.password;
      }

      //this.distributeur.password = this.distributeurForm.value.password;

      if (this.distributeurForm.value.password) {
        console.log(true);
      }

      this.canalService.updateDistribS(this.distributeur).subscribe((data) => {
        console.log('Update Successful');
        window.location.reload();
      });
    }
  }
}
