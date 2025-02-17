import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'funds',
    loadChildren: () =>
      import('./features/fund-operations/fund-operations.module').then(
        (m) => m.FundOperationsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
