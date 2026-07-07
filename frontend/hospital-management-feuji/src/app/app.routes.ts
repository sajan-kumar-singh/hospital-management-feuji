import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { ProviderDashboard } from './components/provider-dashboard/provider-dashboard';
import { PayerDashboard } from './components/payer-dashboard/payer-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'provider-dashboard', component: ProviderDashboard },
  { path: 'payer-dashboard', component: PayerDashboard }
];