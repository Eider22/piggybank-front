import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeFundsComponent } from './features/fund-operations/pages/see-funds/see-funds.component';

const routes: Routes = [
  {path:'', component: SeeFundsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
