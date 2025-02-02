import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundOperationsRoutingModule } from './fund-operations-routing.module';
import { SeeFundsComponent } from './pages/see-funds/see-funds.component';
import { SeeFundsFormComponent } from './components/see-funds-form/see-funds-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DoTopUpComponent } from './pages/do-top-up/do-top-up.component';
import { DoToUpFormComponent } from './components/do-to-up-form/do-to-up-form.component';


@NgModule({
  declarations: [
    SeeFundsComponent,
    SeeFundsFormComponent,
    DoTopUpComponent,
    DoToUpFormComponent
  ],
  imports: [
    CommonModule,
    FundOperationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    SeeFundsComponent,
    DoTopUpComponent
  ]
})
export class FundOperationsModule { }
