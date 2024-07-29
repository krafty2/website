import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';

import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-offre-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './offre-form.component.html',
  styleUrl: './offre-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffreFormComponent {
  offreForm!: FormGroup;

  @Input() offre!: any;

  constructor(private fb: FormBuilder, private canalService: CanalPlusServiceService) { }

  ngOnInit() {
    this.offreForm = this.fb.group({
      bouquet: ['', Validators.required],
      montant: ['', Validators.required],
      prixDecodeur: new FormControl(0, Validators.required),
      prixParabole: new FormControl(0, Validators.required),
      prixInstallation: new FormControl(0, Validators.required),
      savDecodeur: new FormControl(0, Validators.required),
      minMois: new FormControl(1, Validators.required)
    });
  }

  ngAfterViewInit() {

    if (!!this.offre) {
      this.offreForm = this.fb.group({
        idLong:[this.offre.idLong],
        bouquet: [this.offre.bouquet, Validators.required],
        montant: [this.offre.montant, Validators.required],
        prixDecodeur: new FormControl(this.offre.prixDecodeur, Validators.required),
        prixParabole: new FormControl(this.offre.prixParabole, Validators.required),
        prixInstallation: new FormControl(this.offre.prixInstallation, Validators.required),
        savDecodeur: new FormControl(this.offre.savDecodeur, Validators.required),
        minMois: new FormControl(this.offre.minMois, Validators.required)
      });
    }
  }

  handleSubmit() {
    if (!!this.offre) {
      console.log(this.offreForm.value);
      this.canalService.updateOffre(this.offreForm.value).subscribe({
        next:(data)=>{
          console.log(data + ' reussie');
          window.location.reload();
        },
        error:()=>{
          console.log('error');
        }
      })
    } else {
      this.canalService.createOffre(this.offreForm.value).subscribe({
        next: () => {
          window.location.reload();
        },
        error: () => {
          console.log('error');
        }
      });
    }


  }

  //code pour gerer les erreurs
  isControlInvalid(controlName: string): boolean {
    const control = this.offreForm.get(controlName);
    return !!control?.invalid && (control.dirty || control.touched);
  }
}
