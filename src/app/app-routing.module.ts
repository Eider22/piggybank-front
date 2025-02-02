import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeFundsComponent } from './features/fund-operations/pages/see-funds/see-funds.component';
import { DoTopUpComponent } from './features/fund-operations/pages/do-top-up/do-top-up.component';

const routes: Routes = [
  {path:'funds/see-funds', component: SeeFundsComponent},
  {path:'funds/do-to-up', component: DoTopUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
