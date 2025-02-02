import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeFundsComponent } from './pages/see-funds/see-funds.component';
import { DoTopUpComponent } from './pages/do-top-up/do-top-up.component';

const routes: Routes = [
  { path: 'see-funds', component: SeeFundsComponent },
  { path: 'do-to-up', component: DoTopUpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundOperationsRoutingModule {}
