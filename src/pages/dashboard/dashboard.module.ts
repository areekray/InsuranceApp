import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { CurrentMonthClaimsComponentModule } from '../../components/current-month-claims/current-month-claims.module';
import { DateWiseClaimsComponentModule } from '../../components/date-wise-claims/date-wise-claims.module';
import { CloseRateComponentModule } from '../../components/close-rate/close-rate.module';
import { ClaimantInfoComponentModule } from '../../components/claimant-info/claimant-info.module';
import { ClaimsStatusComponentModule } from '../../components/claims-status/claims-status.module';

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    CurrentMonthClaimsComponentModule,
    DateWiseClaimsComponentModule,
    CloseRateComponentModule,
    ClaimantInfoComponentModule,
    ClaimsStatusComponentModule
  ],
})
export class DashboardPageModule {}
