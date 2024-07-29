import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Status } from '../../../_models/demande';
import { StatusPromo, TypePromo } from '../../../_models/promo';
import { CanalPlusServiceService } from '../../../_service/canal-plus-service.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-promo-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  templateUrl: './promo-form.component.html',
  styleUrl: './promo-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoFormComponent {

  promoForm!: FormGroup;

  promoAction: boolean = false;

  isSubmitting: boolean = false;

  typePromo: TypeP[] = [
    { value: TypePromo.STANDARD, viewValue: 'STANDARD' },
    { value: TypePromo.SPECIAL, viewValue: 'SPECIAL' }
  ]

  constructor(private fb: FormBuilder, private canalService: CanalPlusServiceService) { }

  ngOnInit() {
    this.promoForm = this.fb.group({
      dateDebutPromo: new FormControl<Date | null>(new Date(), Validators.required),
      dateFinPromo: new FormControl<Date | null>(null),
      typePromo: new FormControl(TypePromo.STANDARD, Validators.required),
      status: new FormControl("EN_COURS"),
    })
  }

  handelSubmit() {
    console.log(this.promoForm.value);
    this.promoAction = true;
    this.isSubmitting = true;
    this.canalService.savePromo(this.promoForm.value).subscribe({
      next: (data) => {
        if (!!data) {
          this.promoAction = false;
          window.location.reload();
        }

      },
      error: () => {
        this.promoAction = false;
      }
    });
  }
}

interface TypeP {
  value: TypePromo;
  viewValue: string;
}
