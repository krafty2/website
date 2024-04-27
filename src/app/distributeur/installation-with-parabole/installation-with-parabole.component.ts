import { Component } from '@angular/core';
import { RecrutementFormComponent } from './recrutement-form/recrutement-form.component';
import { RecrutementListeComponent } from './recrutement-liste/recrutement-liste.component';


@Component({
  selector: 'app-installation-with-parabole',
  standalone: true,
  imports: [
    RecrutementFormComponent,RecrutementListeComponent
  ],
  templateUrl: './installation-with-parabole.component.html',
  styleUrl: './installation-with-parabole.component.css'
})
export class InstallationWithParaboleComponent {

  
}
