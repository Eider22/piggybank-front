import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeFundsComponent } from './pages/see-funds/see-funds.component';
import { DoTopUpComponent } from './pages/do-top-up/do-top-up.component';
import { WithdrawalComponent } from './pages/withdrawal/withdrawal.component';
import { QrScannerComponent } from './pages/qr-scanner/qr-scanner.component';

const routes: Routes = [
  { path: 'see-funds', component: SeeFundsComponent },
  { path: 'do-to-up', component: DoTopUpComponent },
  { path: 'do-withdrawal', component: WithdrawalComponent },
  { path: 'scann-code', component: QrScannerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundOperationsRoutingModule {}
