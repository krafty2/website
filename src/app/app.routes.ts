import { Routes } from '@angular/router';
import { AcceuilComponent } from './public/acceuil/acceuil.component';
import { GestionDistributeurComponent } from './gerant/distributeur/gestion-distributeur/gestion-distributeur.component';
import { GestionReabonnementComponent } from './gerant/reabonnement/gestion-reabonnement/gestion-reabonnement.component';
import { GestionInstallationComponent } from './gerant/installation/gestion-installation/gestion-installation.component';
import { DashbordComponent } from './gerant/dashbord/dashbord.component';
import { DashbordDistribComponent } from './distributeur/dashbord-distrib/dashbord-distrib.component';
import { GestionReabonnementDistribComponent } from './distributeur/reabonnement/gestion-reabonnement-distrib/gestion-reabonnement-distrib.component';
import { GestionInstallationDistribComponent } from './distributeur/installation/gestion-installation-distrib/gestion-installation-distrib.component';
import { authGuard } from './_guard/auth.guard';
import { LoginComponent } from './public/login/login.component';
import { GerantGlobComponent } from './gerant/gerant-glob/gerant-glob.component';
import { DistributeurGlobComponent } from './distributeur/distributeur-glob/distributeur-glob.component';
import { InstallationWithParaboleComponent } from './distributeur/installation-with-parabole/installation-with-parabole.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'gerant',
    component: GerantGlobComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
      { path: 'dashbord', component: DashbordComponent },
      {
        path: 'gestion-distributeur',
        component: GestionDistributeurComponent,
      },
      {
        path: 'gestion-reabonnement',
        component: GestionReabonnementComponent,
      },
      {
        path: 'gestion-installation',
        component: GestionInstallationComponent,
      },
    ],
  },
  {
    path: 'distributeur',
    component: DistributeurGlobComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
      {
        path: 'dashbord',
        component: DashbordDistribComponent,
      },
      {
        path: 'gestion-distrib-reabonnement',
        component: GestionReabonnementDistribComponent,
      },
      {
        path: 'gestion-distrib-installation',
        component: GestionInstallationDistribComponent,
      },
      {
        path: 'gestion-distrib-inst-with-parabolle',
        component: InstallationWithParaboleComponent,
      },
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },
];
