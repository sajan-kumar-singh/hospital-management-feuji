import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProviderDashboard } from './components/provider-dashboard/provider-dashboard';
import { PayerDashboard } from './components/payer-dashboard/payer-dashboard';
import { Login } from './components/login/login';

@NgModule({
  declarations: [App, ProviderDashboard, PayerDashboard, Login],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
